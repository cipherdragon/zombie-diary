/** @format */

// forked from samuel meuli's eslint config

module.exports = {
	// Disable no-use-before-define rule and enabling @typescript-eslint/no-use-before-define
	"no-use-before-define": "off",
	"@typescript-eslint/no-use-before-define": ["error"],

	// Disable ban-ts-comments rule. This allows to use @ts-ignore
	"@typescript-eslint/ban-ts-comment": "off",

	// Enforce max line length for comments
	// TODO: Remove rule once Prettier can wrap comments
	// See https://github.com/prettier/prettier/issues/265
	"max-len": [
		"error",
		{
			// Disable errors for long code lines (handled by Prettier)
			code: 100000, // High value because the rule cannot be enabled for comments only
			tabWidth: 2,

			// Enable errors for long comment lines
			comments: 100,
			ignoreComments: false,
			ignoreTrailingComments: false,

			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreUrls: true,
		},
	],

	// Enforces no braces where they can be omitted
	// Source: https://github.com/airbnb/javascript/blob/64b965efe0355c8290996ff5a675cd8fb30bf843/packages/eslint-config-airbnb-base/rules/es6.js#L15-L20
	// Re-enabled because turned off by eslint-config-prettier
	"arrow-body-style": [
		"error",
		"as-needed",
		{
			requireReturnForObjectLiteral: false,
		},
	],

	// Suggest using arrow functions as callbacks
	// Source: https://github.com/airbnb/javascript/blob/64b965efe0355c8290996ff5a675cd8fb30bf843/packages/eslint-config-airbnb-base/rules/es6.js#L100-L104
	// Re-enabled because turned off by eslint-config-prettier
	"prefer-arrow-callback": [
		"error",
		{
			allowNamedFunctions: false,
			allowUnboundThis: true,
		},
	],

	// Require curly braces even if a block contains only a single statement
	curly: ["error", "all"],

	// Object spacing
	"object-curly-newline": "off",

	// Disallow console statements (except for console.error)
	"no-console": [
		"error",
		{
			allow: ["error"],
		},
	],

	// Allow for-of loops (but keep other settings for "no-restricted-syntax" rule)
	// Source: https://github.com/airbnb/javascript/blob/b85baeafed8b66fdd9756439a0b8774860147913/packages/eslint-config-airbnb-base/rules/style.js#L334-L352
	"no-restricted-syntax": [
		"error",
		{
			selector: "ForInStatement",
			message:
				"for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
		},
		{
			selector: "LabeledStatement",
			message:
				"Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
		},
		{
			selector: "WithStatement",
			message:
				"`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
		},
	],

	// Sort imports alphabetically within groups
	"sort-imports": "off",
	"import/order": [
		"error",
		{
			alphabetize: {
				caseInsensitive: true,
				order: "asc",
			},
			groups: ["builtin", ["external", "internal"], ["parent", "sibling", "index"]],
			"newlines-between": "always",
		},
	],

	// Allow named export in files with a single export
	"import/prefer-default-export": "off",
};
