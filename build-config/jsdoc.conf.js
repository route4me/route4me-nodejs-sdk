'use strict';

module.exports = {
	opts: {
		destination: "doc",
		encoding: "utf8",
		private: true,
 		template: "node_modules/docdash"
},
	plugins: ['plugins/markdown', "plugins/summarize"],
	readme: "./README.md",
	source: {
		include: [/*"book.org/en/SUMMARY.md",*/ "src", "src/resources"],
		includePattern: ".+\\.js(doc|x)?$",
		excludePattern: "(^|\\/|\\\\)_"
	},
	sourceType: "module",
	docdash: {
		static: true,
		sort: false
	}
};

// module.exports = {
// 	"templates": {
// 		"cleverLinks": true,
// 		"monospaceLinks": false
// 	},
// 	"opts": {
// 		"recurse": true,
// 		"tutorials": "./tutorials/articles",
// 		"readme": "./tutorials/index.md",
// 		"pedantic": true,
// 		"verbose": true
// 	},
// 	"markdown": {
// 		"idInHeadings": true
// 	}
// }
