/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 总入口
*/

import { app } from './app';
import { home } from './home';
import { topic } from './topic';
import { user } from './user';
import { create } from './create';

const rootReducer = {
  	app, //全局
  	home,
  	topic,
  	user,
  	create,
}

export default rootReducer