
import Toast from './src/Toast.jsx';

let toastInstance = 0;
let getToastInstance = (tip) => {
    toastInstance = toastInstance || Toast.newInstance({
        tip,
    });
    return toastInstance;
};
export default {
    info(tip = '系统错误') {
        getToastInstance(tip);
        setTimeout(() => {
            if (toastInstance) {
                toastInstance.destroy();
                toastInstance = null;
            }
        }, 2000);
    },
    close() {
        if (toastInstance) {
            toastInstance.destroy();
            toastInstance = null;
        }
    },
};
