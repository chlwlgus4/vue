// proxy 요청을 보낼 서버 주소
const target = 'http://127.0.0.1:3000';

module.exports = {
    devServer: {
        port: 8080,
        proxy: {
            '^/api': {
                target,
                changeOrigin: true
            }
        }
    }
}