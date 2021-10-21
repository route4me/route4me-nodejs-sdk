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
	bail: true,
	module: {

		rules: [
			{
				test: /\.(test|spec)\.js$/,
				use: {
					loader : "mocha-loader"
				}
			},
			{ 
				test: /\.hbs$/, 
				use : {
					loader: "handlebars-loader" 
				}
			}
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

function mergeCustomizer(objValue, srcValue) {
	if (_.isArray(objValue)) {
		return objValue.concat(srcValue)
	}

	return undefined
}

module.exports.config = config
module.exports.mergeCustomizer = mergeCustomizer
