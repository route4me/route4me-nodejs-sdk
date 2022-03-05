"use strict"

const _            = require("lodash")
const path         = require("path")
const webpack      = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const commonConfig = require("./webpack.common.js")
const babelConfig = require("./babel.browser.js")

const testDir = path.resolve(path.join(__dirname, "..", "tmp"))

const config = _.mergeWith({
	mode : 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,	
				use: {
					loader: 'babel-loader',
					options: babelConfig
				}		
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]'
					},
				},
			},
		],
	},
	performance: {
		hints: false
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
			template: "./build-config/templates/test.hbs",
			filename: "test.html",
			inject: true, // BECAUSE this plugin includes the same shit twice...
			//chunks: [],
		}),
		new webpack.LoaderOptionsPlugin({
			debug: true
		}),
	],

}, commonConfig.config, commonConfig.mergeCustomizer)

module.exports = config
