module.exports = {
	entry: './public/app.js',
	output: {
		path:__dirname + "/public",
		filename: "boundle.js"
	},
	module:{
		loaders: [
			{
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query:{
					presets: ['es2015', 'react']
				}
			},
			{
				test:/\.json$/,
				exclude: /(node_modules)/,
				loader: 'json-loader'
			}
		]
	},
	watch: true
}