exports = module.exports = {
	"extends": [
		"airbnb-base"
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
		"arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
		"indent": ["warn", "tab"],
		"max-classes-per-file": ["error", 15],
		"no-else-return": ["error", { "allowElseIf": true }],
		"no-tabs": "off",
		"import/no-useless-path-segments": "off",
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
		"jsdoc/check-tag-names": [
			"warn",
			{ "definedTags": ["category", "tag"] }
		],
		"jsdoc/require-param": "warn"
	},
	"settings": {
		"jsdoc": {
			"tagNamePreference": {
				"returns": "return"
			}
		}
	}
}
