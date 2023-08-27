import webpack, { DefinePlugin } from 'webpack';
import {buildWebpackConfig} from './config/build/buildWebpackConfig';
import {BuildEnv, BuildPaths} from './config/build/types/config';
import path from 'path';


export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html') ,
        build: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src') ,
    };

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    });

    config!.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
        }),
    );

    return config;
};

