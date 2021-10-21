"use strict"

const _            = require("lodash")
const webpack      = require("webpack")

const commonConfig = require("./webpack.common.js")
const babelConfig = require("./babel.browser.js")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = _.mergeWith({
	mode : 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					query: babelConfig
				}
			},
		],
	},
	entry: {
		"route4me": "./src/index.js",
	},/*
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: false,
			sourceMap: true,
		}),
		// new webpack.LoaderOptionsPlugin({
		// 	debug: true
		// }),
	],*/
	optimization: {
		minimizer: [
		  // we specify a custom UglifyJsPlugin here to get source maps in production
		  new UglifyJsPlugin({
  			uglifyOptions: {
  			  compress: false,
  			},
  			sourceMap: true
		  })
		]
	  },
	output: {
		library: "route4me",
	}
}, commonConfig.config, commonConfig.mergeCustomizer)

module.exports = config
