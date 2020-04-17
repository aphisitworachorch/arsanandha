let mix = require('webpack-mix');

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

module.exports = {
    entry: [
        'babel-polyfill',
        './src/js/app.js'
    ]
}
