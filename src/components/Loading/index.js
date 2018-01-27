/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc loading
*/

import Loading from './src/Loading.jsx';

let loadingInstance = 0;
let getLoadingInstance = (tip) => {
    loadingInstance = loadingInstance || Loading.newInstance({
        tip,
    });
    return loadingInstance;
};
export default {
    open(tip = '加载中...') {
        getLoadingInstance(tip);
    },
    close() {
        if (loadingInstance) {
            loadingInstance.destroy();
            loadingInstance = null;
        }
    },
};
