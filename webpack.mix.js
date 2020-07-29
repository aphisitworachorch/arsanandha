let htmlWebpackPlugin = require('html-webpack-plugin');
let mix = require('laravel-mix');
const babelPolyFill = require("@babel/polyfill")

mix.sass('src/sass/app.sass', 'css').js('src/js/app.js', 'js').options({
    processCssUrls: true,
    purifyCss: false,
    uglify: {
        uglifyOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    }
});
