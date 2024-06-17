module.exports = {
    chainWebpack: (config) => {
        config.plugin.delete('prefetch'); //prefetch 삭제
    },
};

/*prefetch 기능을 삭제해도 비동기 컴포넌트(Lazy Load)로 컴포넌트를 사용할 경우
 * - 컴포넌트 import 시 다음과 같이 처리한다.
 */
// import(/* webpackPrefetch: true */ './views/About.vue');

const target = 'http://127.0.0.1:3000'; //proxy 요청을 보낼 서버 주소

module.exports = {
    devServer: {
        port: 8080,
        proxy: {
            //proxy 요청을 보낼 api 시작 부분
            '^/api': {
                target,
                changeOrigin: true,
            },
        },
    },
};
