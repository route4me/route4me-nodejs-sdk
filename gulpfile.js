"use strict"

const argv = require("yargs").argv

const gulp = require("gulp")
const gulpIf = require("gulp-if")
const eslint = require("gulp-eslint")

gulp.task("default", ["lint"])

gulp.task("lint", () => {
	const fix = !!argv.fix
	return gulp.src(["gulpfile.js", "**/.js"])
		.pipe(eslint({
			fix,
		}))
		.pipe(eslint.format())
		.pipe(gulpIf(fix, gulp.dest("./")))
		.pipe(eslint.failAfterError())
})
