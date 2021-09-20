/** @format */

module.exports = {
	useTabs: true,
	tabWidth: 4,
	printWidth: 100, // Line length: 100 characters
	trailingComma: "all",
	requirePragma: true,

	// Put the closing angular bracket of a multiline JSX or html
	// element in the end of the last line instead of being alone
	// on the next line
	bracketSameLine: true,
	overrides: [
		{
			files: "*.yml",
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
};
