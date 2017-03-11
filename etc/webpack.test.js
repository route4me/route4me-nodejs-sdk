"use strict"

const _            = require("lodash")
const path         = require("path")
const webpack      = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const commonConfig = require("./webpack.common.js")
const babelConfig = require("./babel.browser.js")

const testDir = path.resolve(path.join(__dirname, "..", "tmp"))

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
	externals: {
		sinon: "sinon"
	},
	entry: {
		"test": "./test/webpack-index",
	},
	output: {
		path: path.join(testDir, "browser"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Custom template using Handlebars",
			template: "./etc/templates/test.hbs",
			filename: "test.html",
			inject: false, // BECAUSE this plugin includes the same shit twice...
			//chunks: [],
		}),
		new webpack.LoaderOptionsPlugin({
			debug: true
		}),
	],

}, commonConfig.config, commonConfig.mergeCustomizer)

module.exports = config
