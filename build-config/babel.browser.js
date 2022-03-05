"use strict"

const config = {
	"presets": [
		["env", {
			"targets": {
				"browsers": ["> 5%"],
			},
			"useBuiltIns": true
		}],
	],
	"plugins": [
		["babel-plugin-transform-builtin-extend", {
			globals: ["Error"]
		}]
	]
}

module.exports = config
