"use strict"

const pkg = require("./package.json")

let gatoken = process.env["GA_TOKEN"]
if (!gatoken) {
	// eslint-disable-next-line no-console
	console.warn("Environment key: GA_TOKEN is not defined")
	gatoken =  gatoken || "UA-UNDEFINED-01"
}

module.exports = {
	"root": "./book",
	"title": "Route4Me Javascript SDK",

	"variables": {
		version: pkg.version
	},

	"plugins": [
		// "summary-extend@git+https://github.com/maxkoryukov/gitbook-plugin-summary-extend.git",
		"theme-i-want-be-scoped-but-gitbook-wont",
		"ga",
		"todo",
		"splitter",
		"-githubcontributors",
	],
	"pluginsConfig": {
		"summary-extend": {
			"shortName": "XXXXXXX"
		},
		"sharing": {
			"vk": true
		},
		"ga": {
			"token": gatoken
		},
		"githubcontributors": {
			"githubOwner": "route4me",      // GitHub user name e.g. sta-szek
			"githubRepository": "route4me-nodejs-sdk" // GitHub repo name e.g. pojo-tester
		}
	}
}

/*
var pkg = require('./package.json');

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: './docs',
    title: 'GitBook Toolchain Documentation',

    // Enforce use of GitBook v3
    gitbook: '3.1.1',

    // Use the "official" theme
    plugins: ['theme-official@2.1.1', '-sharing', '-fontsettings', 'sitemap'],

    variables: {
        version: pkg.version
    },

    pluginsConfig: {
        sitemap: {
            hostname: 'https://toolchain.gitbook.com'
        }
    }
};
*/
