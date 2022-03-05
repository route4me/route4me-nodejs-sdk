"use strict"

const argv         = require("yargs").argv

const fs           = require("fs")
const path         = require("path")
const mkdirp       = require("mkdirp-bluebird")
const Promise      = require("bluebird")
const named        = require("vinyl-named")
const _            = require("lodash")
const debug        = require("debug")("route4me:gulpfile")

const gulp         = require("gulp")
const log          = require("fancy-log")
const gulpIf       = require("gulp-if")
const eslint       = require("gulp-eslint")
const mocha        = require("gulp-mocha")
const size         = require("gulp-size")
// const gulpUglify   = require("gulp-uglify")
const gulpWebpack  = require("webpack-stream")
const babel        = require("gulp-babel")
const gulpSequence = require("gulp4-run-sequence")
const cache        = require("gulp-cached")

// TODO: disable:
const jsdoc        = require("gulp-jsdoc3")

const jsdoc2md     = require("jsdoc-to-markdown")
const gitbook      = require("gitbook")

const webpack      = require("webpack")
const del          = require("del")

const jsdocConfig          = require("./.jsdocrc.js")
const webpackBrowserConfig = require("./build-config/webpack.browser.js")
const webpackTestConfig    = require("./build-config/webpack.test.js")
const babelBrowserConfig   = require("./build-config/babel.browser.js")
const babelNodeConfig      = require("./build-config/babel.node.js")

const fix = !!argv.fix
const grep = argv.grep

/*
 ======================================
 MONKEY PATCH
 ======================================
 */
gulp.Gulp.prototype.__runTask = gulp.Gulp.prototype._runTask
gulp.Gulp.prototype._runTask = function monkeyPatchGulpRunTask(task) {
	this.currentTask = task
	this.__runTask(task)
}
/*
 ======================================
 /MONKEY PATCH
 ======================================
 */

const PATHS = {
	"test": [
		"test/**/*.test.js",
		"test/**/*.spec.js",
		"test/**/*.integration.js",
		"examples/**/*.js",
	],

	"src": [
		"src/**/*.js",
	],

	"entry": {
		"browser": "./src/index.js",
	},
}

gulp.task("doc:pre", gulp.series(function DG() {     // eslint-disable-line prefer-arrow-callback
	const docDir = path.join(__dirname, "book", "en", "code")

	const parentsTree = {}

	return mkdirp(docDir)
		.then(() => jsdoc2md.getTemplateData({
			files: PATHS.src,
		}))
		.each((item) => {
			parentsTree[item.id] = item
		})
		.reduce((acc, item) => {
			let ancestor = item
			while (ancestor && "undefined" !== typeof ancestor.memberof) {
				ancestor = parentsTree[ancestor.memberof]
			}
			let category = ancestor && ancestor.category

			if ("undefined" === typeof category) {
				category = "Uncategorized"
			}
			if (!acc.has(category)) {
				acc.set(category, [])
			}

			acc.get(category).push(item)

			return acc
		}, new Map())

		// render all categories:
		.map((item) => {
			const category = item[0]
			const data = item[1]

			return Promise.props({
				category,
				output: jsdoc2md.render({
					data,
					"name-format": false,
					"module-index-format": "none",
					"global-index-format": "none",

					"member-index-format": "grouped", // grouped, list
					"property-list-format": "table", // list, table - works for enums
					"param-list-format": "table", // list, table - only table, or replace template!
					// "configure": ".jsdocrc.json",
					"plugin": "dmd-gitbook",
					"no-scope": false,
					"example-lang": "javascript",
				})
			})
		})
		// write to file:
		.map((item) => {
			const fn = path.join(docDir, `${item.category}.md`)
			log("DOC, saving to file", fn)
			return fs.writeFile(fn, item.output)
		})
}))

gulp.task("doc:install", gulp.series(function DI() { // eslint-disable-line prefer-arrow-callback
	const cmd = gitbook.commands.filter(c => c.name.match(/^install\s/i))[0]
	return cmd.exec([__dirname], {})
}))

gulp.task("watch:doc",gulp.series( ["doc:pre"], function D() { // eslint-disable-line prefer-arrow-callback
	const cmd = gitbook.commands.filter(c => c.name.match(/^serve\s/i))[0]

	return cmd.exec([
		path.join(__dirname),
		path.join(__dirname, "tmp", "gitbook")
	], {
		log: "info",
		format: "website",
		open: false,
		port: 4000,
		live: true,
			// lrport: typeof options.livereload === 'object' ? options.livereload.port : undefined,
		watch: true, //typeof options.livereload === 'object' ? options.livereload.watch : undefined,
			//browser: options.browser
	})
}))

// TODO: remove this task
gulp.task("docold", gulp.series(function D() {           // eslint-disable-line prefer-arrow-callback
	return gulp.src(
		"README.md", {
			read: false,
		})
		.pipe(jsdoc(jsdocConfig))
}))

gulp.task("lint", gulp.series(function L() {          // eslint-disable-line prefer-arrow-callback
	return gulp.src(_.flattenDeep([
		PATHS.src,
		PATHS.test,
	]), { "base": "./" })
		.pipe(cache("lint", { optimizeMemory: true }))
		.pipe(eslint({
			fix,
		}))
		.pipe(eslint.format())
		.pipe(gulpIf(fix, gulp.dest("./")))
		.pipe(eslint.failAfterError())
}))

gulp.task("test", gulp.series(function T() {          // eslint-disable-line prefer-arrow-callback
	return gulp.src(PATHS.test, { read: false })
		.pipe(mocha({
			// reporter: "list",
			ignoreLeaks: false,
			ui: "bdd",
			require: ["./test/bootstrap"],
			grep,
		}))
}))

gulp.task("build:node", gulp.series(function BN() {      // eslint-disable-line prefer-arrow-callback
	const babelConfig = babelNodeConfig

	return gulp.src(PATHS.src)
		.pipe(babel(babelConfig))
		.pipe(size({ title: "build:node", showFiles: true }))
		.pipe(gulp.dest("dist/"))
}))

gulp.task("build:browser",function taskBuildBrowser(done) {  // eslint-disable-line prefer-arrow-callback	
	try {
		const config = webpackBrowserConfig		
		debug("WebPack config:", config)
				
		gulp.src(PATHS.entry.browser)
		.pipe(named())
		.pipe(gulpWebpack(config, webpack))
		.pipe(size({ title: "build:browser", showFiles: true }))
		.pipe(gulp.dest("dist/browser/"))
		return done()
	} catch(err) {
		console.log(err);
	}
	
})

gulp.task("build:browser:test",function taskBuildBrowserTest(done) {  // eslint-disable-line prefer-arrow-callback
	
	const config = webpackTestConfig	
	debug("WebPack config:", config)

	gulp.src(PATHS.entry.browser)
		.pipe(named())
		.pipe(gulpWebpack(config, webpack))
		.pipe(size({ title: "build:browser:test", showFiles: true }))
		.pipe(gulp.dest("tmp/browser/"))	
	return done()	
})

gulp.task("clean", gulp.series(function () {	
	return del([
		"./dist/",
		"./tmp/",
	])
}))

// SUPERTASKS

gulp.task("doc", gulp.series("watch:doc"))
gulp.task("build", (done) => {
	gulpSequence("build:node", "build:browser","build:browser:test", done)
	return undefined
})

gulp.task("default", gulp.series((done) => {
	gulpSequence("lint", "build", "test", done)
	return undefined
}))
