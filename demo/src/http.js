import asxios from "axios";
// import Vue from 'vue'
// import router from "./router/index";
const http = asxios.create({
    // baseURL: process.env.VUE_APP_API_URL || '/web/api',
    baseURL: 'http://59.196.99.4/gateway/api/1/get_qiye?ENTNAME=加贝',
    headers: { 'AppKey': '688337637353717760' },
})

export default http