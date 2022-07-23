const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require("webpack");

const config = {
	entry: path.resolve(__dirname, "./src/index.tsx"),
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			"@images": path.resolve(__dirname, "./src/assets/images/"),
			"@fonts": path.resolve(__dirname, "./src/assets/fonts/"),
			"@components": path.resolve(__dirname, "./src/components/"),
			"@utils": path.resolve(__dirname, "./src/utils/"),
			"@views": path.resolve(__dirname, "./src/views/"),
			"@customTypes": path.resolve(__dirname, "./src/types/"),
			"@store": path.resolve(__dirname, "./src/store/"),
			"@services": path.resolve(__dirname, "./src/services/"),
			"@api": path.resolve(__dirname, "./src/API/"),
			"@skeletons": path.resolve(__dirname, "./src/skeletons/"),
			"@axios": path.resolve(__dirname, "./src/axios/"),
			"@hooks": path.resolve(__dirname, "./src/hooks/"),
			"@validation": path.resolve(__dirname, "./src/validation/"),
			"@icons": path.resolve(__dirname, "./src/icons/"),
			"@routes": path.resolve(__dirname, "./src/routes/")
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
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
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
			template: path.resolve(__dirname, "./src/index.html")
		}),
		new ESLintWebpackPlugin({
			extensions: ["js", "tsx", "ts"]
		}),
		new CleanWebpackPlugin(),
		new webpack.EnvironmentPlugin({
			API_URL: "http://localhost:5000/"
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
