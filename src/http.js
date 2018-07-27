import axios from 'axios'
import store from './store/index'
import * as types from './store/type'
import router from './router'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://api.github.com';

// request配置
axios.interceptors.request.use (
    config => {
        if(store.state.token) {
            config.headers.Authorization = 'token ' + store.state.token;
        }
        return config
    },
    err => {
        return Promise.reject(err);
    }
)

// response 配置
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401: 
                if (router.currentRoute.path !== '/') {
                    router.replace({
                        path: '/',
                        query: { redirect: router.currentRoute.path },})
                }
                break;                 
            }

            return Promise.reject(error.response.data)
        }
    }
)

export default axios