const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
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
            template: './src/informasi/data-penduduk/index.html',
            filename: 'informasi/data-penduduk/index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/informasi/layanan/index.html',
            filename: 'informasi/layanan/index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/informasi/website-lainnya/index.html',
            filename: 'informasi/website-lainnya/index.html',
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
        port: 8081,
        open: false,
        hot: true,
    },
    performance: {
        hints: false,
    },
};
