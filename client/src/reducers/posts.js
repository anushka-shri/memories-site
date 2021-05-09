/* eslint-disable import/no-anonymous-default-export */
import {
	DELETE,
	UPDATE,
	LIKE,
	FETCH_ALL,
	NEW_POSTS,
} from '../constants/actionTypes';

export default (posts = [], action) => {
	switch (action.type) {
		case UPDATE:
		case LIKE:
			return posts.map((post) =>
				post._id === action.payload._id ? action.payload : post,
			);
		case FETCH_ALL:
			return action.payload;
		case DELETE:
			return posts.filter((post) => post._id !== action.payload);
		case NEW_POSTS:
			return [...posts, action.payload];

		default:
			return posts;
	}
};
