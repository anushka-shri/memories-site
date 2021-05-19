import { combineReducers } from 'redux';

import posts from './posts';
import auth from './authReducer';

export default combineReducers({
	posts, auth
});
