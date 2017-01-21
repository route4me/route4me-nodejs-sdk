exports = module.exports = {
	"extends": [
		"airbnb"
	],
	"rules": {
		"dot-notation": "off",

		// code style
		"indent": ["warn", "tab"],
		"no-tabs": "off",
		"semi": ["error", "never"],
		"no-multi-spaces": "off",     // TODO: set strict rule
		"quote-props": "off",         // TODO: set strict rule

		// double quotes (JSON love ", and not ')
		// and we like to copypaste time to time
		"quotes": ["warn", "double"],

		"no-underscore-dangle": ["error", { "allowAfterThis": true }],
	}
}
