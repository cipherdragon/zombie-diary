// copied from Samuel Meuli's eslint config

module.exports = {
	// File extension
	"react/jsx-filename-extension": [
		"error",
		{
			extensions: [".jsx", ".tsx"],
		},
	],

	// Tab indentation
	"react/jsx-one-expression-per-line": "off",

	// Require <button> to have "type" attribute (prevents unintended form submissions)
	"react/button-has-type": "error",

	// Allow JSX props spreading
	"react/jsx-props-no-spreading": "off",

	// Sort PropTypes alphabetically
	"react/jsx-sort-default-props": "error",
	"react/sort-prop-types": "error",

	// Allow initial state to be static public field or in constructor
	// TODO: Remove once static public field is enforced in Airbnb config
	"react/state-in-constructor": "off",

	// Require propTypes, defaultProps etc. to be static public fields in class components
	// TODO: Remove once enabled by default in Airbnb config
	"react/static-property-placement": ["error", "static public field"],
};