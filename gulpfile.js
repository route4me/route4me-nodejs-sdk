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
const util         = require("gulp-util")
const gulpIf       = require("gulp-if")
const eslint       = require("gulp-eslint")
const mocha        = require("gulp-mocha")
const size         = require("gulp-size")
// const gulpUglify   = require("gulp-uglify")
const gulpWebpack  = require("webpack-stream")
const babel        = require("gulp-babel")
const gulpSequence = require("run-sequence")
const cache        = require("gulp-cached")

// TODO: disable:
const jsdoc    = require("gulp-jsdoc3")

const jsdoc2md = require("jsdoc-to-markdown")
const gitbook  = require("gitbook")

const webpack  = require("webpack")

const jsdocConfig   = require("./.jsdocrc.js")
const webpackConfigs = {
	"browser": require("./webpack/browser.config.js"),
	"test": require("./webpack/test.config.js"),
}

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
 MONKEY PATCH
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

gulp.task("doc:pre", function DG() {     // eslint-disable-line prefer-arrow-callback
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
			util.log("DOC, saving to file", fn)
			return fs.writeFile(fn, item.output)
		})
})

gulp.task("doc:install", function DI() { // eslint-disable-line prefer-arrow-callback
	const cmd = gitbook.commands.filter(c => c.name.match(/^install\s/i))[0]
	return cmd.exec([__dirname], {})
})

gulp.task("watch:doc", ["doc:pre"], function D() { // eslint-disable-line prefer-arrow-callback
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
})

// TODO: remove this task
gulp.task("docold", function D() {           // eslint-disable-line prefer-arrow-callback
	return gulp.src(
		"README.md", {
			read: false,
		})
		.pipe(jsdoc(jsdocConfig))
})

gulp.task("lint", function L() {          // eslint-disable-line prefer-arrow-callback
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
})

gulp.task("test", function T() {          // eslint-disable-line prefer-arrow-callback
	return gulp.src(PATHS.test, { read: false })
		.pipe(mocha({
			// reporter: "list",
			ignoreLeaks: false,
			ui: "bdd",
			require: ["./test/bootstrap"],
			grep,
		}))
})

gulp.task("build:node", function BN() {      // eslint-disable-line prefer-arrow-callback
	return gulp.src(PATHS.src)
		.pipe(babel())
		.pipe(size({ title: this.currentTask.name, showFiles: true }))
		.pipe(gulp.dest("dist/"))
})

gulp.task("build:browser", function taskBuildBrowser() {  // eslint-disable-line prefer-arrow-callback
	const config = webpackConfigs.browser

	debug("WebPack config:", config)

	return gulp.src(PATHS.entry.browser)
		.pipe(named())
		.pipe(gulpWebpack(config, webpack))
		.pipe(size({ title: this.currentTask.name, showFiles: true }))
		.pipe(gulp.dest("dist/browser/"))
})

gulp.task("build:browser:test", function taskBuildBrowserTest() {  // eslint-disable-line prefer-arrow-callback
	const config = webpackConfigs.test

	debug("WebPack config:", config)

	return gulp.src(PATHS.entry.browser)
		.pipe(named())
		.pipe(gulpWebpack(config, webpack))
		.pipe(size({ title: this.currentTask.name, showFiles: true }))
		.pipe(gulp.dest("tmp/browser/"))
})

// SUPERTASKS

gulp.task("doc", ["watch:doc"])
gulp.task("build", ["build:node", "build:browser", "build:browser:test"])
gulp.task("default", (done) => {
	gulpSequence("lint", "build", "test", done)
	return undefined
})
