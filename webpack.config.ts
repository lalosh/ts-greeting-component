import { Configuration } from "webpack";
import * as path from 'path';


const config: Configuration = {
    mode: 'production',
    entry: path.join(__dirname, './src/index.ts'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, './dist'),
        libraryTarget: 'umd',
        library: 'GreetingLibrary'
    },
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
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
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