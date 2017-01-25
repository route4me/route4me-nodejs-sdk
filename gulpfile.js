"use strict"

const argv = require('yargs').argv;

const gulp = require("gulp")
const eslint = require('gulp-eslint')

gulp.task('default', ['lint'])

gulp.task('lint', () => {
	return gulp.src(['gulpfile.js', '**/.js'])
		.pipe(eslint({
			"fix": !!argv.fix
		}))
		.pipe(gulp.dest())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
})
