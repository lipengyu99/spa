import asxios from "axios";
// import Vue from 'vue'
// import router from "./router/index";
asxios.defaults.baseURL = '/api'
const http = asxios.create({
    // baseURL: process.env.VUE_APP_API_URL || '/web/api',
    //baseURL: 'http://59.196.99.4/gateway/api/1/get_qiye?ENTNAME=加贝',
    baseURL: 'http://127.0.0.1:8080/',
    //headers: { 'AppKey': '688337637353717760' },
    withCredentials: false,
})

export default http