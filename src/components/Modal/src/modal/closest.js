/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-05-19 14:02:30
 * @desc antd对话框组件辅助函数
*/

export default function closest (el, selector) {
    let matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    let p = el;
    while (p) {
        if (matchesSelector.call(p, selector)) {
            return p;
        }
        p = p.parentElement;
    }
    return null;
}
