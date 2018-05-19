/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-05-19 14:02:30
 * @desc antd对话框组件
*/

import alert from './src/modal/alert';
import Modal from './src/modal/Modal';
import operation from './src/modal/operation';
import prompt from './src/modal/prompt';
Modal.alert = alert;
Modal.prompt = prompt;
Modal.operation = operation;
export default Modal;