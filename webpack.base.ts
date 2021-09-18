import path from "path";

//import LicenseCheckerWebpackPlugin from "license-checker-webpack-plugin";
import { Configuration } from "webpack";

export default (
	_: string | Record<string, boolean | number | string>,
	args: any,
): Configuration => {
	// const configName = args.config[0].split(".")[2];
	return {
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
	};
};
