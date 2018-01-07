/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2017-11-17 09:56:39
 * @modify date 2017-11-17 09:56:39
 * @desc 接口请求
*/

import { message } from 'antd';
import request from '../utils/request';
import urls from './urls';

export default {
    // get /topics 主题首页
    topics(options = {}) {
        return new Promise((resolve, reject) => {
            request(urls.topics, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(options),
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
                // 交予全局处理
                // message.error(error.msg);
            });
        });
    },
    // get /topic/:id 主题详情
    topic(options = {}) {
        return new Promise((resolve, reject) => {
            request(urls.topics, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(options),
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
                // 交予全局处理
                // message.error(error.msg);
            });
        });
    },
    // post /topics 新建主题
    newTopics(options = {}) {
        return new Promise((resolve, reject) => {
            request(urls.newTopics, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(options),
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
                // 交予全局处理
                // message.error(error.msg);
            });
        });
    },
    // post /topics/update 编辑主题
    update(options = {}) {
        return new Promise((resolve, reject) => {
            request(urls.update, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(options),
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
                // 交予全局处理
                // message.error(error.msg);
            });
        });
    },
    // post /topic_collect/collect 收藏主题
    collect(options = {}) {
        return new Promise((resolve, reject) => {
            request(urls.collect, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(options),
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
                // 交予全局处理
                // message.error(error.msg);
            });
        });
    },
    // post /topic_collect/de_collect 取消主题
    deCollect(options = {}) {
        return new Promise((resolve, reject) => {
            request(urls.deCollect, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(options),
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
                // 交予全局处理
                // message.error(error.msg);
            });
        });
    },
    // get /topic_collect/:loginname 用户所收藏的主题
    userCollect(options = {}) {
        return new Promise((resolve, reject) => {
            request(urls.userCollect, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(options),
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
                // 交予全局处理
                // message.error(error.msg);
            });
        });
    },
    // post /topic/:topic_id/replies 新建评论
    replies(options = {}) {
        return new Promise((resolve, reject) => {
            request(urls.replies, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(options),
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
                // 交予全局处理
                // message.error(error.msg);
            });
        });
    },
    // post /reply/:reply_id/ups 为评论点赞
    ups(options = {}) {
        return new Promise((resolve, reject) => {
            request(urls.ups, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(options),
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
                // 交予全局处理
                // message.error(error.msg);
            });
        });
    },
    // get /user/:loginname 用户详情
    user(options = {}) {
        return new Promise((resolve, reject) => {
            request(urls.user, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(options),
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
                // 交予全局处理
                // message.error(error.msg);
            });
        });
    },
    // post /accesstoken 验证 accessToken 的正确性
    accesstoken(options = {}) {
        return new Promise((resolve, reject) => {
            request(urls.accesstoken, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(options),
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
                // 交予全局处理
                // message.error(error.msg);
            });
        });
    },
    // get /message/count 获取未读消息数
    count(options = {}) {
        return new Promise((resolve, reject) => {
            request(urls.count, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(options),
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
                // 交予全局处理
                // message.error(error.msg);
            });
        });
    },
    // get /messages 获取已读和未读消息
    messages(options = {}) {
        return new Promise((resolve, reject) => {
            request(urls.messages, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(options),
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
                // 交予全局处理
                // message.error(error.msg);
            });
        });
    },
    // post /message/mark_all 标记全部已读
    markAll(options = {}) {
        return new Promise((resolve, reject) => {
            request(urls.markAll, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(options),
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
                // 交予全局处理
                // message.error(error.msg);
            });
        });
    },
    // post /message/mark_one/:msg_id 标记单个消息为已读
    markOne(options = {}) {
        return new Promise((resolve, reject) => {
            request(urls.markOne, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(options),
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
                // 交予全局处理
                // message.error(error.msg);
            });
        });
    },
};
