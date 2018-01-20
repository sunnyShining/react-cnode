import { app } from './app';
import { home } from './home';
import { topic } from './topic';
import { user } from './user';
import { messages } from './messages';

const rootReducer = {
  	app, //全局
  	home,
  	topic,
  	user,
  	messages,
}

export default rootReducer