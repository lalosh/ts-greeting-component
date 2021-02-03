import { Configuration } from "webpack";
import * as path from 'path';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';



const config: Configuration = {
    mode: 'production',
    entry: path.join(__dirname, './src/index.ts'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, './dist'),
        libraryTarget: 'umd',
        library: 'GreetingLibrary',
        publicPath: path.join(__dirname, './dist/'),
        umdNamedDefine: true,
    },
    plugins: [
        // new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'babel-loader',
                include: path.join(__dirname, './src'),
                exclude: /node_modules/
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                include: path.join(__dirname, './src'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    // extract css into separate files
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         esModule: false,
                    //     }
                    // },
                    'css-loader'
                ],
                include: path.join(__dirname, './src'),
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource',
                
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        },
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        },
        axios: {
            commonjs: 'axios',
            commonjs2: 'axios',
            amd: 'axios',
            root: 'axios',
        },
    }
}

export default [config]