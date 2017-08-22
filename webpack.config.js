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
			},{
				test:/\.(png|gif|jpg|jpeg|bmp)$/i,
				use:[
					{
						loader:"file-loader"
					}
				]
			},{
                test: /\.(eot|svg|ttf|woff|woff2)$/,
				use:[
					{
						loader:'file-loader',
						options:{
							name: 'fonts/[name].[ext]?[hash]'
						}
					}
				]
            }
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:__dirname+'/src/index.tmpl.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ExtraTextPlugin("style.css"),
		new CleanWebpackPlugin(['dist'])
	],
	devtool:"inline-source-map",
	devServer:{
		inline:true,
		hot:true,
		port:8999,
		proxy:{
			'/v4/api/*':{
				target:"http://m.maizuo.com/",
				host:"m.maizuo.com",
				changeOrigin:true
			}
		}
	}
}
