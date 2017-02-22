"use strict"

const debug        = require("debug")("route4me-dev:webpack")
const _            = require("lodash")
const path         = require("path")
const webpack      = require("webpack")
const packageJson  = require("./package.json")

const distDir = path.join(__dirname, "dist")

// required to avoid loading entire `package.json` to
// browser-bundle
const packageJsonReplacement = _.pick(packageJson, [
	"version"
])

const commonRules = {
	profile: true,
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
			}, {
				test: /[\/\\]package\.json$/,
				loader: "json-string-loader",
				options: {
					json: packageJsonReplacement
				},
			}
		],

	},
	devtool: "source-map",
	output: {
		path: distDir,
		filename: "route4me.js",
		//libraryTarget: "web",
	},
	entry: "./src/index.js",
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: true,
			sourceMap: true,
		}),
		new webpack.LoaderOptionsPlugin({
			debug: true
		}),
	],
}

const configs = [{
	target: "web",
	output: {
		path: path.resolve(distDir),
		library: "route4me",
		libraryTarget: "umd2",
	},
}, {
	target: "web",
	output: {
		path: path.resolve(distDir, "commonjs"),
		library: "route4me",
		libraryTarget: "commonjs2",
	},
}, {
	target: "web",
	output: {
		path: path.resolve(distDir, "amd"),
		library: "route4me",
		libraryTarget: "amd",
	},
}]

let fullConfigs = _(configs)
	.map(cfg => _.defaultsDeep({}, cfg, commonRules))
	// because gulp-webpack can't handle multiple configs...
	// TODO: search for workaround
	.head()
	//.value()

debug("WebPack config:", fullConfigs)
module.exports = fullConfigs
