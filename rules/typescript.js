/** @format */

// copied from Samuel Meuli's eslint config

module.exports = {
	// File extension checks in imports: Use `eslint-plugin-import`'s default configuration for
	// TypeScript compatibility (overridden by the Airbnb configs)
	"import/extensions": ["error", "never"],

	// Allow `@tsignore`
	"@typescript-eslint/ban-ts-ignore": "off",

	// Do not make accessibility modifiers (public/package/private) mandatory
	"@typescript-eslint/explicit-member-accessibility": "off",

	// Allow explicit `any`
	"@typescript-eslint/no-explicit-any": "off",

	// Allowing {} type as it conflicts with some react components
	"@typescript-eslint/ban-types": [
		"error",
		{
			extendDefaults: true,
			types: {
				"{}": false,
			},
		},
	],
};
