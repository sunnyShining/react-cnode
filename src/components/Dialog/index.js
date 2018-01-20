
import Dialog from './src/Dialog.jsx';

// 默认值
let defaults = {
    title: '温馨提示', // 弹框头部
    showTitle: true, // 显示头
    message: '', // body的文字
    dialogType: 0,
    showInput: false, // 是否显示输入框
    inputPlaceholder: '', // 输入框未输入文字显示
    inputValue: null, // 输入框默认内容
    showInputTestError: false,
    showInputValidMoney: false,
    showClose: false,
    modalFade: false,
    lockScroll: false,
    closeOnClickModal: false,
    confirmButtonText: '确定', // 两个按钮确认按钮文字
    cancelButtonText: '取消', // 两个按钮取消按钮文字
    showOneBtn: false, // 是否显示一个按钮
    oneBtnText: '确定', // 一个按钮文案
    useText: false,
    text: ''
};

let dialogInstance = 0;

let initOptions = (options) => {
    let args = Object.assign({}, defaults, options)
    return args;
}

let getDialogInstance = (options) => {
    let args = initOptions(options)
    dialogInstance = dialogInstance || Dialog.newInstance({
        ...args,
    });
    return dialogInstance;
};
export default {
    open(options = {}) {
        getDialogInstance(options);
    },
    close() {
        if (dialogInstance) {
            dialogInstance.destroy();
            dialogInstance = null;
        }
    },
};
