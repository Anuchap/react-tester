module.exports = {
    entry: './app/app.js',
    output: {
        filename: './dist/bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    }
}
