/** @format */

import { Configuration } from "webpack";
import merge from "webpack-merge";

import base from "./webpack.base";

export default (
	env: string | Record<string, boolean | number | string>,
	args: { config: string; mode: string; watch: boolean },
): Configuration =>
	// @ts-ignore
	merge(base(env, args), {
		entry: "./src/main/main.ts",
		output: {
			filename: "main.js",
		},
		target: "electron-main",
		node: {
			__dirname: false,
			__filename: false,
		},
	});
