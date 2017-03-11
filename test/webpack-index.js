"use strict"

/**
 * FOR WEBPACK!
 *
 * This is just an index for all tests and test suites
 */

import './bootstrap'

/*
https://webpack.github.io/docs/context.html

* the directory to match within,
* a boolean flag to include or exclude subdirectories,
* a regular expression to match files against.

*/

const ctx = require.context('../test/', true, /^().+\.(spec|test)\.js$/)
ctx.keys().forEach(ctx)

const contextExamples = require.context('../examples/', true, /^().+\.(spec|test)\.js$/)
contextExamples.keys().forEach(contextExamples)

module.exports = ctx
