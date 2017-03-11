"use strict"

const _            = require("lodash")
const webpack      = require("webpack")

const commonConfig = require("./webpack.common.js")
const babelConfig = require("./babel.browser.js")

const config = _.mergeWith({
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				query: babelConfig,
			},
		],
	},
	entry: {
		"route4me": "./src/index.js",
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: false,
			sourceMap: true,
		}),
		// new webpack.LoaderOptionsPlugin({
		// 	debug: true
		// }),
	],
	output: {
		library: "route4me",
	}
}, commonConfig.config, commonConfig.mergeCustomizer)

module.exports = config
