"use strict"

const config = {
	"presets": [
		["env", {
			"targets": {
				"node": "current", //4.8,
			},
			"useBuiltIns": true
		}],
	],
	"plugins": [
		// ["babel-plugin-transform-builtin-extend", {
		// 	globals: ["Error"]
		// }]
		"require-context-hook"
	],
}

module.exports = config
