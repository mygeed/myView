/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
//const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
let externals = [
  {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue'
    }
  }
]
const plugins = [
  new VueLoaderPlugin()
]

const entry = path.resolve(__dirname, '../src/components/main.ts')

externals.push({
  '@popperjs/core': '@popperjs/core',
  'async-validator': 'async-validator',
  'mitt': 'mitt',
  'normalize-wheel': 'normalize-wheel',
  'resize-observer-polyfill': 'resize-observer-polyfill',
},
/^dayjs.*/,
/^lodash.*/)


const config = {
  mode: 'production',
  entry,
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'MyView',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      }, {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader', {
            loader: 'less-loader',   // compiles Less to CSS
            options: {
              // 这里配置全局变量
              /*globalVars: {
                'ten': '10px', // ten可以是ten，也可以是@ten，效果一样，下同
                'hundred': '100px'
              }*/
              javascriptEnabled: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  externals,
  plugins
}

module.exports = config
