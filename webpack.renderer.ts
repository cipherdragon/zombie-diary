import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
import merge from "webpack-merge";

import pkg from "./package.json";
import base from "./webpack.base";

export default (
	env: string | Record<string, boolean | number | string>,
	args: any,
): Configuration =>
	// @ts-ignore
	merge(base(env, args), {
		entry: "./src/renderer/renderer.tsx",
		output: {
			filename: "renderer.js",
		},
		module: {
			rules: [
				{
					test: /\.s?css$/,
					use: ["style-loader", "css-loader", "sass-loader"],
				},
				{
					test: /\.svg$/,
					use: {
						loader: "@svgr/webpack",
						options: {
							titleProp: true,
							svgoConfig: {
								plugins: [
									{
										removeViewBox: false,
									},
								],
							},
						},
					},
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: "file-loader",
				},
			],
		},
		resolve: {
			extensions: [ '.tsx', '.ts', '.js', '.sass', '.scss']
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: pkg.productName,
			}),
		],
		target: "electron-renderer",
	});
