import asxios from "axios";
import Vue from 'vue'
import router from "./router/index";
const http = asxios.create({
    // baseURL: process.env.VUE_APP_API_URL || '/web/api',
     baseURL: 'http://127.0.0.1:3000/web/api/'
})

export default http