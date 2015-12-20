module.exports = {
    context: __dirname + "/",
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        // `loaders` is an array of loaders to use.
        // here we are only configuring vue-loader
        loaders: [{
            test: /\.vue$/, // a regex for matching all files that end in `.vue`
            loader: 'vue' // loader to use for matched files
        }]
    }
};
