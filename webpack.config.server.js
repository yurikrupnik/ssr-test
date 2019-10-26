const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const dotenv = require('dotenv');
const SwaggerJSDocWebpackPlugin = require('swagger-jsdoc-webpack-plugin');
const JsDocPlugin = require('jsdoc-webpack-plugin-v2');
const json = require('./package');

const filename = 'server.js';

module.exports = (env, argv) => {
    const isProd = env ? !!env.prod : false;
    const isDebug = env ? !!env.debug : false;
    // isProd ? dotenv.config() : require('./src/config');
    return {
        context: path.resolve(__dirname, 'src'),
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss']
        },
        target: 'node', // in order to ignore built-in modules like path, fs, etc.
        node: false,
        externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
        devtool: 'source-map',
        entry: './server.jsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            chunkFilename: '[name].js',
            filename
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'css-loader',
                        {
                            loader: 'sass-loader'
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.DEBUG': JSON.stringify(isDebug),
                'process.env.PORT': JSON.stringify(process.env.PORT)
            }),
            new GenerateJsonPlugin('package.json', Object.assign({}, json, {
                main: filename,
                scripts: {
                    start: `node ${filename}`
                },
                devDependencies: {}
            })),
            new SwaggerJSDocWebpackPlugin({
                swaggerDefinition: {
                    openapi: '3.0.0',
                    info: {
                        title: json.name,
                        version: json.version,
                        description: json.description
                    }
                },
                apis: ['./src/api/**/index.js', './src/api/**/model.js'],
            }),
            // fs.existsSync(path.resolve(__dirname, 'jsdoc.json')) ? new JsDocPlugin({
            //     conf: path.resolve(__dirname, 'jsdoc.json') // single jsdoc file
            // }) : () => {},
            new NodemonPlugin({
                script: path.join(__dirname, 'dist', filename),
                watch: path.join(__dirname, 'dist', filename),
                verbose: true
            })
        ],
    };
};
