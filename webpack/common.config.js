"use strict"

const _            = require("lodash")
const path         = require("path")
const packageJson  = require("./../package.json")
// const webpack      = require("webpack")

const distDir = path.resolve(path.join(__dirname, "..", "dist"))

// required to avoid loading entire `package.json` to
// browser-bundle
const packageJsonReplacement = _.pick(packageJson, [
	"version"
])

const config = {
	profile: true,
	target: "web",
	module: {

		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
			}, {
				test: /[/\\]package\.json$/,
				loader: "json-string-loader",
				options: {
					json: packageJsonReplacement
				},
			}, {
				test: /\.(test|spec)\.js$/,
				loader: "mocha-loader",
			},
			{ test: /\.hbs$/, loader: "handlebars-loader" }
		],
	},
	externals: {
		sinon: "sinon"
	},
	devtool: "source-map",
	output: {
		path: path.resolve(distDir),
		filename: "[name].js",
		libraryTarget: "umd2",
	},
}

module.exports = config
