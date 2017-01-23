exports = module.exports = {
	"extends": [
		"airbnb"
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
		"no-multi-spaces": "off",     // TODO: stop ignoring, set a rule
		"quote-props": "off",         // TODO: stop ignoring, set a rule

		// double quotes (JSON love ", and not ')
		// and we like to copypaste time to time
		"quotes": ["warn", "double"],

		"no-underscore-dangle": "off",
	}
}
