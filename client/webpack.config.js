const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require("webpack");

const config = {
	entry: path.resolve(__dirname, "./src/app/entry.tsx"),
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			"@images": path.resolve(__dirname, "./assets/images/"),
			"@fonts": path.resolve(__dirname, "./assets/fonts/"),
			"@entities": path.resolve(__dirname, "./src/entities/"),
			"@shared": path.resolve(__dirname, "./src/shared/"),
			"@pages": path.resolve(__dirname, "./src/pages/"),
			"@app": path.resolve(__dirname, "./src/app/"),
			"@types": path.resolve(__dirname, "./src/types/"),
			"@features": path.resolve(__dirname, "./src/features/"),
			"@widgets": path.resolve(__dirname, "./src/widgets/")
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: ["ts-loader"]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"]
			},
			{
				test: /\.(ico|gif|png|jpg|jpeg)$/i,
				type: "asset/resource"
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf)$/,
				type: "asset/inline"
			},
			{
				test: /\.svg$/,
				use: ["@svgr/webpack", "url-loader"],
				issuer: /\.tsx?$/
			}
		]
	},
	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "bundle.js",
		publicPath: "/"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./index.html"),
			favicon: "./assets/favicon.ico"
		}),
		new ESLintWebpackPlugin({
			extensions: ["js", "tsx", "ts"]
		}),
		new CleanWebpackPlugin(),
		new webpack.EnvironmentPlugin({
			API_URL: process.env.API_URL || "http://localhost:5000/api",
			SERVER_URL: process.env.SERVER_URL || "http://localhost:5000"
		})
	]
};

module.exports = (env, argv) => {
	if (argv.mode === "development") {
		config.devtool = "eval-source-map";
		config.devServer = {
			port: 3000,
			historyApiFallback: true,
			hot: true
		};
		config.plugins = [...config.plugins, new ReactRefreshWebpackPlugin()];
	}

	if (argv.mode === "production") {
		config.devtool = "source-map";
	}

	return config;
};
