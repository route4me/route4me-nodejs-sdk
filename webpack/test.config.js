"use strict"

const _            = require("lodash")
const path         = require("path")
const webpack      = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const commonConfig = require("./common.config.js")

const testDir = path.resolve(path.join(__dirname, "..", "tmp"))

const config = _.merge({
	externals: {
		sinon: "sinon"
	},
	entry: {
		"test": "./test/index.js",
	},
	output: {
		path: path.join(testDir, "browser"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Custom template using Handlebars",
			template: "./webpack/templates/test.hbs",
			filename: "test.html",
			inject: false, // BECAUSE this plugin includes the same shit twice...
			//chunks: [],
		}),
		new webpack.LoaderOptionsPlugin({
			debug: true
		}),
	],

}, commonConfig)

module.exports = config
