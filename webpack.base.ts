/** @format */

import path from "path";

// import LicenseCheckerWebpackPlugin from "license-checker-webpack-plugin";
import { Configuration } from "webpack";

export default (
	_: string | Record<string, boolean | number | string>,
	args: { config: string; mode: string; watch: boolean },
): Configuration => ({
	output: {
		path: path.resolve(__dirname, "bundle"),
	},
	devtool: args.mode === "production" ? false : "source-map",
	resolve: {
		extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
	},
	module: {
		rules: [
			{
				test: [/\.jsx?$/, /\.tsx?$/],
				use: "babel-loader",
				exclude: /node_modules/,
			},
		],
	},
});
