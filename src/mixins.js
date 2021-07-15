import axios from "axios";

// 프록시 설정
/*
axios.defaults.baseURL = 'http://localhost:3000'; //허락하는 요청 주소
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'; //
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
*/

export default {
    methods: {
        async $api(url, method, data) {
            return (await axios({
                method: method,
                url,
                data
            }).catch(e => {
                console.log(e)
            })).data;
        }
    }
}