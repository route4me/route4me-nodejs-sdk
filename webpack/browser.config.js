"use strict"

const _            = require("lodash")
const webpack      = require("webpack")

const commonConfig = require("./common.config.js")

const config = _.merge({
	module: {
	},
	entry: {
		"route4me": "./src/index.js",
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: true,
			sourceMap: true,
		}),
		// new webpack.LoaderOptionsPlugin({
		// 	debug: true
		// }),
	],
	output: {
		library: "route4me",
	}
}, commonConfig)

module.exports = config
