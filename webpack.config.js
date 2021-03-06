const path = require('path');
const fs = require('fs');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const pkgFolder = path.join(__dirname, './pkg');
const bootstrapFile = path.join(pkgFolder, 'bootstrap.js');

const isProd = process.env.NODE_ENV === 'production';
const outputLibName = process.env.LIB_VER === 'all' ? "" : `-${process.env.LIB_VER}`;

let isDir = false;
try {
    isDir = fs.lstatSync(pkgFolder).isDirectory();
} catch (err) { }
if (!isDir) {
    fs.mkdirSync(pkgFolder);
}
fs.writeFileSync(bootstrapFile, `exports.default = require("../dist/index-${process.env.LIB_VER}");`);

const plugins = [];
if (isProd) {
    plugins.push(new UglifyJsPlugin());
}

module.exports = {
    entry: bootstrapFile,
    output: {
        path: pkgFolder,
        filename: "iota-qr-lib" + outputLibName + (isProd ? '.min' : '') + '.js',
        libraryTarget: 'umd',
        libraryExport: 'default',
        library: {
            root: "IotaQR",
            amd: "@tangle-frost/iota-qr-lib",
            commonjs: "@tangle-frost/iota-qr-lib"
        },
        umdNamedDefine: true,
        globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    target: "web",
    externals: {
        "big-integer": {
            "amd": "big-integer",
            "commonjs": "big-integer",
            "commonjs2": "big-integer",
            "root": "bigInt"
        }
    },
    mode: isProd ? "production" : "development",
    devtool: isProd ? undefined : "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            [
                                "@babel/preset-env", {
                                    "targets": {
                                        "browsers": [
                                            "Chrome >= 52",
                                            "FireFox >= 44",
                                            "Safari >= 7",
                                            "Explorer 11",
                                            "last 4 Edge versions"
                                        ]
                                    } 
                                }
                            ]
                        ],
                        "plugins": [
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    "helpers": false,
                                    "regenerator": true
                                }
                            ],
                            [
                                "babel-plugin-transform-builtin-extend",
                                {
                                    "globals": ["Error"]
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    node: {
        fs: "empty",
        path: "empty",
        console: false,
        global: true,
        process: true,
        __filename: false,
        __dirname: false,
        Buffer: true,
        setImmediate: false
    },
    plugins
};
