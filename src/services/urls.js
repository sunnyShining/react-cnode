/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2017-11-17 09:55:04
 * @modify date 2017-11-17 09:55:04
 * @desc 域名
*/

function hostName() {
    if (ENV === 'development') {
        return {
            api: 'https://cnodejs.org/api/v1',
        };
    } else if (ENV === 'staging') {
        return {
            api: 'https://cnodejs.org/api/v1',
        };
    } else if (ENV === 'production') {
        return {
            api: 'https://cnodejs.org/api/v1',
        };
    }
}
const host = hostName();
export default {
    // get /topics 主题首页
    topics: host.api + '/topics',
    // get /topic/:id 主题详情
    topic: host.api + '/topic/',
    // post /topics 新建主题
    newTopics: host.api + '/topics',
    // post /topics/update 编辑主题
    update: host.api + '/topics/update',
    // post /topic_collect/collect 收藏主题
    collect: host.api + '/topic_collect/collect',
    // post /topic_collect/de_collect 取消主题
    deCollect: host.api + '/topic_collect/de_collect',
    // get /topic_collect/:loginname 用户所收藏的主题
    userCollect: host.api + '/topic_collect/',
    // post /topic/:topic_id/replies 新建评论
    replies: host.api + '/topic/',
    // post /reply/:reply_id/ups 为评论点赞
    ups: host.api + '/reply/',
    // get /user/:loginname 用户详情
    user: host.api + '/user/',
    // post /accesstoken 验证 accessToken 的正确性
    accesstoken: host.api + '/accesstoken',
    // get /message/count 获取未读消息数
    count: host.api + '/message/count',
    // get /messages 获取已读和未读消息
    messages: host.api + '/messages',
    // post /message/mark_all 标记全部已读
    markAll: host.api + '/message/mark_all',
    // post /message/mark_one/:msg_id 标记单个消息为已读
    markOne: host.api + '/message/mark_one/',
};
