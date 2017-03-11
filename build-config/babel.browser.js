"use strict"

const config = {
	"presets": [
		"babel-preset-es2015",
		"babel-preset-es2016",
		["env", {
			"targets": {
				"browsers": ["> 5%"],
			},
			"useBuiltIns": true,
		}],
	],
	"plugins": [
		["babel-plugin-transform-builtin-extend", {
			globals: ["Error"]
		}]
	]
}

module.exports = config
