const path = require('path');
// 배포환경이면 true, 개발환경이면 false
const isProd = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// dotenv ->
const dotenv = require('dotenv');
const EnvironmentPluginObject = {};

if (isProd) {
  // env 파일 데이터를 가져온다
  dotenv.config({ path: path.join(__dirname, '.env.production') });
} else {
  dotenv.config({ path: path.join(__dirname, '.env.development') });
}

Object.keys(process.env).forEach(key => {
  // env파일에 REACT_APP_ 접두어가 있으면 임시 변수에 넣는다. 그 키값에 process env 값을 할당한다.
  if (key.includes('REACT_APP_')) EnvironmentPluginObject[key] = process.env[key];
});

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'hidden-source-map' : 'source-map', // development 환경에서만 source-map을 만든다. ->외부에서 리액트 구조를 보고싶을때
  entry: './src/index.tsx',
  output: {
    filename: '[name].js', // [name]은 청크의 이름을 사용한다.
    path: path.join(__dirname, '/dist'), //
  },
  // node_modules -> 외부 라이브러리를 바로 가져올 수 있다.
  // resolve는 웹팩이 알아서 경로 확장자를 처리할 수 있도록한다.
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'], //
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        // ts-loader는 TS -> JS로 트랜스파일링하는 작업과 type check 작업을 구분한다.(같은 스레드에서 실행된다.)
        // true -> 타입체크를 수행하지 않고, 트랜스 파일링만 진행한다. d.ts 파일도 생성되지않는다. (더 빠르게 프로덕트 실행 가능)
        // dev 모드이면 true로 설정하여 개발속도를 높이고, production 모드이면 d.ts 파일생성 및 타입 체크를 허용함으로써 안정성을 높일 수 있다.
        // 보통 속도향상과 안정성을 위해 transpile only는 true로 하고 fork-ts-checker-webpack-plugin라는 플러그인으로 타입 체크를 한다.
        options: {
          transpileOnly: !isProd, //
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.scss$/,
        use: [
          { loader: 'style-loader' },

          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCaseOnly',
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.module\.scss$/i,
        use: [
          { loader: 'style-loader' },
          {
            loader: '@teamsupercell/typings-for-css-modules-loader',
            options: {
              verifyOnly: isProd,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCaseOnly',
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },

  // 후처리기 -> 번들링된걸수정한다는느낌
  // 로더(전처리기) -> 빌드가됨(웹팩이 설정파일보고 함) -> 플러그인을 적용(번들링된 파일을 수정)
  plugins: [
    // 빌트인
    new webpack.EnvironmentPlugin({
      ...EnvironmentPluginObject,
    }),
    new HtmlWebpackPlugin({
      // 빌드 과정이 끝나고 번들한 css,js 파일등을 지정한 html에 link script 걸어준다.
      // index.html에 output에서 만들어진 bundle.js를 적용하여, dist에 새로운 html 파일 생성
      template: 'public/index.html',
    }),
    new webpack.WatchIgnorePlugin({ paths: [/scss\.d\.ts$/] }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    // 404를 표시하는 것 대신 다른 페이지를 노출
    historyApiFallback: true,
  },
  performance: {
    hints: isProd && false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
