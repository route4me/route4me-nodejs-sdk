"use strict"

const argv = require("yargs").argv

const gulp = require("gulp")
const gulpIf = require("gulp-if")

const eslint = require("gulp-eslint")
const mocha = require("gulp-mocha")
const jsdoc = require("gulp-jsdoc3")
const size = require("gulp-size")

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

gulp.task("doc", function D() {           // eslint-disable-line prefer-arrow-callback
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
		"./examples/*.js",
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
