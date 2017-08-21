const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtraTextPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")


module.exports = {
	entry:path.resolve(__dirname,'src/index.js'),
	output:{
		filename:"bundle.js",
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				include:[
					path.resolve(__dirname,'src')
				],
				use:{
					loader:"babel-loader",
					options:{
						presets:['es2015','react']
					}
				}
			},{
				test:/\.less$/,
				use:ExtraTextPlugin.extract({
					fallback:"style-loader",
					use:[
						{
							loader:"css-loader",
							options:{
								modules:true
							}
						},{
							loader:"less-loader"
						}
					]
				})
			}
		]
	}
}
