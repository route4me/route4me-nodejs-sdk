exports = module.exports = {
	"extends": [
		"airbnb"
	],
	"rules": {
		"dot-notation": "off",

		// code style
		"indent": ["warn", "tab"],
		"no-tabs": "off",

		// double quotes (JSON love ", and not ')
		// and we like to copypaste time to time
		"quotes": ["warn", "double"],

		"no-underscore-dangle": ["error", { "allowAfterThis": true }],
	}
}
