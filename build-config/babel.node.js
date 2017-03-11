"use strict"

const config = {
	"presets": [
		// "babel-preset-es2015",
		// "babel-preset-es2016",
		["env", {
			"targets": {
				"node": "current", //4.8,
			},
			"useBuiltIns": true,
		}],
	],
	"plugins": [
		// ["babel-plugin-transform-builtin-extend", {
		// 	globals: ["Error"]
		// }]
	]
}

module.exports = config
