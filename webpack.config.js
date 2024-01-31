// Стандартный модуль
let path = require('path');
// const webpack = require('webpack');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");

let conf = {
    // точка входа (откуда собираем)
    entry: './src/main.js',
    // куда кладем (папка и файл) обязательно абсолютный путь
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "main.js",
        // относительная ссылка на папку с файлом, которая будет подставляться из браузера
        publicPath: '/dist/',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '.'),
        },
        // для отображения ошибок в браузере, а не консоли
        client: {
            overlay: true,
        },
    },

    module: {
        // Описание правил с каким расширением, что делаем
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                // - старый код не прогонять через babel-loader
                exclude: "/node_modules/",
                // options: { presets: ["@babel/react"]}
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }



            // // Разделяем стили модульные и глобальные
            // {
            //     test: /\.module\.css$/,
            //     use: [MiniCssExtractPlugin.loader,
            //             {
            //                 loader:"css-loader",
            //                 options: {
            //                     // Для корректной работы других лоадеров (пропускает @import) (если postcss-loader = 1,
            //                     // если ещё saas-loader - 2
            //                     importLoaders: 0,
            //                     modules: {
            //                         // Назначаем имя для модульных классов (базовое название + ...)
            //                         localIdentName: '[local]__[sha1:hash:hex:7]'
            //                     }
            //                     // // Чтобы автоматические имена классов
            //                     // modules: true,
            //                 }
            //             }
            //         ]
            // },
            // {
            //     // Заканчивается на .css но не заканчивается на .module.css
            //     test: /^((?!\.module).)*css$/,
            //     use: [MiniCssExtractPlugin.loader, "css-loader"]
            // }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    // Оптимизация, чтобы модульный css всегда был снизу (имел больший приоритет)
    // optimization: {
    //     // Нарезка на чанки
    //     splitChunks: {
    //         // Правила, в какой чанк мы отправляем импортируемую сущность
    //         cacheGroups: {
    //             // Из node_modules идет в chunk-vendors, все остальное chunk-common
    //             // Так как chunk-vendors и chunk-common - динамические файлы, то вместо main используем [name]
    //             // chunk-vendors - код библиотек
    //             // chunk-common - наш код
    //             vendors: {
    //                 name: `chunk-vendors`,
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: -10,
    //                 chunks: 'initial'
    //             },
    //             common: {
    //                 name: `chunk-common`,
    //                 priority: -20,
    //                 chunks: 'initial',
    //                 reuseExistingChunk: true
    //             }
    //         }
    //     }
    // }
    // resolve: { extensions: ['*', '.js', '.jsx'] }
};

// Функция - чтобы разделять dev и production (например сделать разные карты кода)
module.exports = (env, options) => {
    // console.log(options);
    let isProd = options.mode === 'production';
    // карта кода подтянется только если пользователь зайдёт в консоль разработчика
    // conf.devtool = production ? "source-map" : "eval-sourcemap";
    // conf.devtool = isProd ? false : "eval-cheap-module-source-map";
    // Чтобы map появились в dist
    conf.devtool = isProd ? 'source-map' : 'eval-cheap-module-source-map';
    // Куда хочет разместить
    conf.target = isProd ? 'browserslist' : 'web';
    return conf;
}