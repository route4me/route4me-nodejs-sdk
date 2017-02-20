"use strict"

const fs       = require("fs")
const path     = require("path")
const argv     = require("yargs").argv
const mkdirp   = require("mkdirp-bluebird")
const Promise  = require("bluebird")
const gulp     = require("gulp")
const util     = require("gulp-util")
const gulpIf   = require("gulp-if")
const eslint   = require("gulp-eslint")
const mocha    = require("gulp-mocha")
const size     = require("gulp-size")

// TODO: disable:
const jsdoc    = require("gulp-jsdoc3")

const jsdoc2md = require("jsdoc-to-markdown")

const fix = !!argv.fix
const grep = argv.grep

const jsdocConfig = require("./.jsdocrc.js")

gulp.task("default", ["lint", "test"])
gulp.task("build", ["build:node"])

const paths = {
	"test": [
		"test/**/*.test.js",
		"test/**/*.spec.js",
		"test/**/*.integration.js",
		"examples/**/*.js",
	],
}

gulp.task("doc", function X() {
	const docDir = path.join(__dirname, "book", "en", "code")

	const parentsTree = {}

	return mkdirp(docDir)
		.then(() => jsdoc2md.getTemplateData({
			files: "src/**/*.js",
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
					"global-index-format": "table",
					// "configure": ".jsdocrc.json",
					"plugin": "dmd-gitbook",
					"no-scope": false,
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

gulp.task("docold", function D() {           // eslint-disable-line prefer-arrow-callback
	// TODO: remove this task
	return gulp.src(
		"README.md", {
			read: false,
		})
		.pipe(jsdoc(jsdocConfig))
})

gulp.task("lint", function L() {          // eslint-disable-line prefer-arrow-callback
	return gulp.src([
		"./src/**/*.js",
		"./test/**/*.js",
		"./examples/**/*.js",
	], { "base": "./" })
		.pipe(eslint({
			fix,
		}))
		.pipe(eslint.format())
		.pipe(gulpIf(fix, gulp.dest("./")))
		.pipe(eslint.failAfterError())
})

gulp.task("test", function T() {          // eslint-disable-line prefer-arrow-callback
	return gulp.src(paths.test, { read: false })
		.pipe(mocha({
			// reporter: "list",
			ignoreLeaks: false,
			ui: "bdd",
			require: ["./test/bootstrap"],
			grep,
		}))
})

gulp.task("build:node", function BN() {      // eslint-disable-line prefer-arrow-callback
	return gulp.src("./src/**/*.js")
		.pipe(size({ title: "build:node", showFiles: true }))
		.pipe(gulp.dest("dist/"))
})
