/** @format */

const baseRules = require("./rules/base");
const reactRules = require("./rules/react");
const typescriptRules = require("./rules/typescript");

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		"airbnb",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/typescript",
		"prettier",
		"plugin:import/electron",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		...baseRules,
		...reactRules,
		...typescriptRules,
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: ["scripts/**/*", "test/**/*", "webpack.*.ts"],
			},
		],
	},
};
