exports = module.exports = {
	"extends": [
		"airbnb"
	],
	"plugins": [
		// TODO: this is LINT rules for DOC. `Use with npm install eslint-plugin-jsdoc`
		"jsdoc"
	],
	"parserOptions": {
		"sourceType": "script"   // required to set "strict mode" explicitly
	},
	"rules": {
		"strict": ["error", "global"],
		"dot-notation": "off",

		// code style
		"indent": ["warn", "tab"],
		"no-tabs": "off",
		"semi": ["error", "never"],
		"yoda": ["error", "always"],
		"no-multi-spaces": "off",     // TODO: stop ignoring, set a rule
		"quote-props": "off",         // TODO: stop ignoring, set a rule

		// double quotes (JSON love ", and not ')
		// and we like to copypaste time to time
		"quotes": ["warn", "double"],

		"no-underscore-dangle": "off",
		"comma-dangle": ["error", {
			"arrays": "only-multiline",
			"objects": "only-multiline",
			"imports": "only-multiline",
			"exports": "only-multiline",
			"functions": "ignore",
		}],

		// TODO: this is LINT rules for DOC. `Use with npm install eslint-plugin-jsdoc`
		//"jsdoc/check-param-names": 1,
		"jsdoc/check-tag-names": "warn",
		// "jsdoc/check-types": 1,
		// "jsdoc/newline-after-description": 1,
		// "jsdoc/require-description-complete-sentence": 1,
		// "jsdoc/require-hyphen-before-param-description": 1,
		"jsdoc/require-param": "warn",
		// "jsdoc/require-param-description": 1,
		// "jsdoc/require-param-type": 1,
		// "jsdoc/require-returns-description": 1,
		// "jsdoc/require-returns-type": 1
	},
	"settings": {
		"jsdoc": {
			"tagNamePreference": {
				"returns": "return"
			},
			"additionalTagNames": {
				"customTags": "category"
			}
		}
	}
}
