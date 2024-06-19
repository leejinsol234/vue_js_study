const target = 'http://127.0.0.1:3000';

module.exports = {
    devServer: {
        port: 8000,
        proxy: {
            '^api': {
                target,
                changeOrigin: true,
            },
            '^/unload': {
                target,
                changeOrigin: true,
            },
            '^/download': {
                target,
                changeOrigin: true,
            },
        },
    },
};

//Vue 프로젝트는 클라이언트로, Node.js 프로젝트는 서버로 각각 별도의 포트로 실행시킬 것이기 때문이다.
//이렇게 클라이언트와 서버의 포트가 다른 경우에는 HTTP 통신을 위해서 프록시 서버를 추가해줘야 CORS 문제를 해결할 수 있다.
