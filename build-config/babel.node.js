"use strict"

const config = {
	"presets": [
		[
			"@babel/preset-env",
			{
				"targets": {
					"node": "current",
				},
				"useBuiltIns": false
			}
		],
	],
	"generatorOpts": {
		"compact": false,
		"retainLines": true,
		"indent": {
			"adjustMultilineComment": false,
			"style": "	"
		}
	}
}

module.exports = config
