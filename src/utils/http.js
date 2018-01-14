/*
* created by jmxb on 2017/05/28
* 开心每一天
* 工具类函数
*/

import axios from 'axios';
import Loading from '../components/Loading/index';

// 响应拦截（一般拦截登录，还有loading等）
axios.interceptors.response.use(function (response) {
    // Do something with response data
    Loading.close();
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        return Promise.reject(error);
    }
}, function (error) {
    Loading.close();
    // Do something with response error
    return Promise.reject(error);
});

export default {

    http: {
        request (options, cb) {
            Loading.open();
            options.method = options.method && options.method.toLocaleUpperCase();
            if (!options.headers) {
                options.headers = {};
            }
            if (options.method === 'GET') {
                axios.get(options.url, {
                    params: options.qs,
                    headers: options.headers
                }).then((res) => {
                    cb(res.data)
                }).catch((err) => {
                    cb(err);
                });
            } else if (options.method === 'POST') {
                axios.post(options.url, {
                    ...options.qs
                }, {
                    headers: options.headers
                }).then((res) => {
                    cb(res.data);
                }).catch((err) => {
                    cb(err);
                });
            }
        }
    }
};
