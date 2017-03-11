exports = module.exports = {
	"env": {
		"mocha": true,
	},
	"globals": {
		"expect": true,
		"packageRoot": true,
	},

	"rules": {
		"no-unused-expressions": "off",   // because of `expect(x).to.be.true`
		"camelcase": "off",  // don't care...
	}
}
