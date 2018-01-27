/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 接口请求工具
*/

import axios from 'axios';
import Loading from '../components/Loading/index';
import Toast from '../components/Toast/index';

let notLoading = false;
// 请求拦截
axios.interceptors.request.use(function (config) {
    !notLoading && Loading.open();
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 响应拦截（一般拦截登录，还有loading等）
axios.interceptors.response.use(function (response) {
    // Do something with response data
    !notLoading && Loading.close();
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        let error = {
            success: false,
            error_msg: '系统错误，请稍后重试！'
        }
        return Promise.reject(error);
    }
}, function (error) {
    !notLoading && Loading.close();
    let err = {
        success: false,
        error_msg: '系统错误，请稍后重试！'
    }
    // Do something with response error
    return Promise.reject(error.response.data || err);
});

export default {

    http: {
        request (options, cb) {
            options.method = options.method && options.method.toLocaleUpperCase();
            notLoading = options.notLoading;
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
                    if (!err.success && !options.mask) {
                        Toast.info(err.error_msg);
                    }
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
                    if (!err.success && !options.mask) {
                        Toast.info(err.error_msg);
                    }
                    cb(err);
                });
            }
        }
    }
};
