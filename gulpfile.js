"use strict"

const argv = require("yargs").argv

const gulp = require("gulp")
const gulpIf = require("gulp-if")

const eslint = require("gulp-eslint")
const mocha = require("gulp-mocha")
const size = require('gulp-size')

const fix = !!argv.fix
const grep = argv.grep

gulp.task("default", ["lint", "test"])
gulp.task("build", ["build:node"])

const paths = {
	"test": [
		"test/**/*.spec.js",
		"test/**/*.test.js",
		"examples/**/*.no.js",
	],
}

gulp.task("lint", () => {
	return gulp.src([
			//"gulpfile.js",
			"**/.js"
		])
		.pipe(eslint({
			fix,
		}))
		.pipe(eslint.format())
		.pipe(gulpIf(fix, gulp.dest("./")))
		.pipe(eslint.failAfterError())
})

gulp.task("test", () => {
	return gulp.src(paths.test, { read: false })
		.pipe(mocha({
			// reporter: "list",
			ignoreLeaks: false,
			ui: "bdd",
			require: ["./test/bootstrap"],
			grep,
		}))
})

gulp.task("build:node", () => {
	return gulp.src("./src/**/*.js")
		.pipe(size({title: "build:node", showFiles: true}))
		.pipe(gulp.dest("dist/"))
})
