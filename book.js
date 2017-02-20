module.exports = {
    "root": "./book",
	"plugins": [
		"summary-extend@git+https://github.com/maxkoryukov/gitbook-plugin-summary-extend.git",
		{
			name: "theme-i-want-be-scoped-but-gitbook-wont",
			version: ">=1.0.6",
		},
	],
	"pluginsConfig": {
		"summary-extend": {
			"shortName": "XXXXXXX"
		},
		"sharing": {
			"vk": true
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
