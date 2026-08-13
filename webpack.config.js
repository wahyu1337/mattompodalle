const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/assets/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/profil/lurah/index.html',
            filename: 'profil/lurah/index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/profil/struktur-organisasi/index.html',
            filename: 'profil/struktur-organisasi/index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/visi-misi/index.html',
            filename: 'visi-misi/index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/informasi/index.html',
            filename: 'informasi/index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/gallery/index.html',
            filename: 'gallery/index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/kontak/index.html',
            filename: 'kontak/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets'),
                    globOptions: {
                        ignore: ['**/js/**', '**/css/**'],
                    },
                },
            ],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
        open: true,
        hot: true,
    },
};
