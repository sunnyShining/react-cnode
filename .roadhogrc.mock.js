//加载mock的数据 通过循环把在 mock 文件夹下的所有配置文件都拿到，并最后export出去

const mock = {}
require('fs').readdirSync(require('path').join(__dirname + '/mock')).forEach(function(file) {
    Object.assign(mock, require('./mock/' + file))
})
module.exports = mock