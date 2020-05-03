module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ["airbnb-base"],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
	},
	rules: {
		quotes: [2, "double", "avoid-escape"],
		indent: [2, "tab"],
		"no-console": 0,
		"no-unused-vars": 1,
		"no-tabs": 0,
		"func-names": 0,
		"space-before-function-paren": 0,
		"prefer-arrow-callback": 0,
	},
};
