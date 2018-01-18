/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-12 22:18:39
 * @modify date 2018-01-12 22:18:39
 * @desc 接口请求
*/

import utils from '../utils/http';
import urls from './urls';

export default {
    // get /topics 主题首页
    topics(options = {}) {
        return new Promise((resolve, reject) => {
            utils.http.request({
                method: 'GET',
                url: urls.topics,
                qs: options
            }, (data) => {
                resolve(data);
            });
        });
    },
    // get /topic/:id 主题详情
    topic(options = {}) {
        let url = `${urls.topic}${options.id}`;
        return new Promise((resolve, reject) => {
            utils.http.request({
                method: 'GET',
                url,
                qs: {accesstoken: options.options},
            }, (data) => {
                resolve(data);
            });
        });
    },
    // post /topics 新建主题
    newTopics(options = {}) {
        return new Promise((resolve, reject) => {
            utils.http.request({
                method: 'POST',
                url: urls.newTopics,
                qs: options,
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
            utils.http.request({
                method: 'POST',
                url: urls.update,
                qs: options,
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
            utils.http.request({
                method: 'POST',
                url: urls.collect,
                qs: options,
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
            utils.http.request({
                method: 'POST',
                url: urls.deCollect,
                qs: options,
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
        let url = `${urls.userCollect}${options.username}`;
        return new Promise((resolve, reject) => {
            utils.http.request({
                method: 'GET',
                url,
                qs: {},
            }, (data) => {
                resolve(data);
            });
        });
    },
    // post /topic/:topic_id/replies 新建评论
    replies(options = {}) {
        return new Promise((resolve, reject) => {
            utils.http.request({
                method: 'POST',
                url: urls.replies,
                qs: options,
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
        let url = `${urls.ups}${options.reply_id}/ups`
        return new Promise((resolve, reject) => {
            utils.http.request({
                method: 'POST',
                url,
                qs: {accesstoken: options.accesstoken},
            } , (data) => {
                resolve(data);
            });
        });
    },
    // get /user/:loginname 用户详情
    user(options = {}) {
        let url = `${urls.user}${options.username}`;
        return new Promise((resolve, reject) => {
            utils.http.request({
                method: 'GET',
                url,
                qs: {},
            }, (data) => {
                resolve(data);
            });
        });
    },
    // post /accesstoken 验证 accessToken 的正确性
    accesstoken(options = {}) {
        return new Promise((resolve, reject) => {
            utils.http.request({
                method: 'POST',
                url: urls.accesstoken,
                qs: options,
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
            utils.http.request({
                method: 'GET',
                url: urls.count,
                qs: options,
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
            utils.http.request({
                method: 'GET',
                url: urls.messages,
                qs: options,
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
            utils.http.request({
                method: 'POST',
                url: urls.markAll,
                qs: options,
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
            utils.http.request({
                method: 'POST',
                url: urls.markOne,
                qs: options,
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
