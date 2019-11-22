module.exports = {
    lintOnSave: process.env.NODE_ENV !== "production",
    // proxy API requests to Valet during development
    devServer: {
        //proxy: 'http://localhost:8000'//с пушером траблы вызывает;
        proxy: {
            '^/api': {
                target: '//api.ru',
                ws: true,
                changeOrigin: true,
                secure: false,
            }
        }
    },

    publicPath: process.env.NODE_ENV === 'production' ?
        './' : '',
    assetsDir: "./", //По умолчанию: '' - Каталог (относительно outputDir) для хранения сгенерированных статических ресурсов (js, css, img, fonts).
    outputDir: "dist",
    indexPath: "index.html", //умолч -'index.html'-относительно outputDir
    filenameHashing: false,
    chainWebpack: config => {
        config.module
            .rule("vue")
            .use("vue-loader")
            .loader("vue-loader")
            .tap(options => {
                options["transformAssetUrls"] = {
                    img: "src",
                    image: "xlink:href",
                };
                return options;
            });
    },

};