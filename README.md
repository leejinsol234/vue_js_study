## webpack.config.js (webpack 설정 파일 분석)
```javascript
var path = require('path') 
var webpack = require('webpack') 
```
output 속성에서 사용할 노드 path 라이브러리와 웹팩 플로그인에서 사용할 node_modules의 웹팩 라이브러리를 node_modules 폴더에서 로딩하여 path와 webpack에 각각 저장한다.</br></br>

```javascript
module.exports = {
  entry: './src/main.js',
```
웹팩으로 빌드할 파일을 src 폴더 밑의 main.js 파일로 지정한다. main.js 파일에 정의한 내용에 따라 애플리케이션의 구성 요소 및 파일들이 웹팩으로 번들링(빌드)된다.</br></br>
```javascript
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
```
웹팩으로 빌드를 하고 난 결과물 파일의 위치와 이름을 지정한다. 결과물 파일의 위치는 dist/build.js이다.</br></br>
```javascript
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
```
프로젝트 폴더 안의 css 파일에 vue-style-loader와 css-loader를 적용한다. css-loader를 적용하여 css 파일을 모두 자바스크립트로 변환한다. 그리고 앞에서 변환된 css 속성들이 최종적으로 vue-style-loader를 거쳐 index.html에 <style> 태그로 삽입된다.</br></br>
```javascript
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
```
vue 파일에는 vue-loader를 적용한다. vue 파일의 <template>, <script>, <style> 등의 내용이 자바스크립트로 변환되어 웹팩 빌드 결과물에 포함된다.</br></br>
```javascript
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
```
자바스크립트 파일에 babel-loader를 적용한다. 자바스크립트 파일의 ES6 문법을 모든 브라우저에서 호환 가능한 자바스크립트로 변환한다.</br></br>
```javascript
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
```
이미지 파일들은 file-loader를 이용하여 자바스크립트 파일로 변환한다.</br></br>
```javascript
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
```
웹팩으로 빌드할 때 뷰 라이브러리의 여러 유형 중 어떤 걸 선택할 지 지정한다. 여기서 설정된 vue.esm.js는 최신 웹팩 버전과 사용할 수 있는 Full 버전의 라이브러리를 의미하며, 이렇게 별도로 설정하지 않으면 런타임 버전인 vue.runtime.esm.js를 사용한다.</br></br>
```javascript
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
```
웹팩 데브 서버 관련 속성을 지정한다. historyApiFallback 속성은 클라이언트 사이드 라우팅인 뷰 라우터와 함께 사용하기 위해 true로 지정한다. noInfo 속성은 처음 서버를 시작할 때만 웹팩 빌드 정보를 보여주고, 이후 변경 시에는 빌드 정보를 보여주지 않는다. overlay 속성은 웹팩으로 빌드할 때 오류가 있으면 브라우저 화면 전체에 오류를 표시한다.</br></br>
```javascript
  performance: {
    hints: false
  },
```
웹팩으로 빌드한 파이르이 크기가 250kb를 넘으면 경고 메시지를 표시할 지를 설정한다. hints가 false이므로 크기와 관계 없이 경고가 표시되지 않는다.</br></br>
```javascript
  devtool: '#eval-source-map'
}
```
웹팩으로 빌드된 파일로 웹 앱을 구동했을 때 개발자 도구에서 사용할 디버깅 방식을 지정한다. (htttps://webpack.js.org/configuration/devtool/ 에서 여러 옵션 참고) </br></br>
하단은 배포 시 설정 코드이다.
```javascript
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
```
개발자 도구 분석 옵션을 #source-map으로 지정한다.</br></br>
```javascript
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
```
자바스크립트 파일의 크기를 줄이는 Uglify 플러그인과 환경 변수 값을 설정한다.
