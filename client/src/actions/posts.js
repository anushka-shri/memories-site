import * as api from '../Api';

// Action creators

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        
        console.log(error);
    }
};

export const createPost = (post) =>  async (dispatch) => {
    
    try {

        // api.createPost is being imported from api where url is fetched using axios
        const { data } = await api.createPost(post);
        dispatch({type: 'NEW_POSTS', payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
	try {
		// api.createPost is being imported from api where url is fetched using axios
		const { data } = await api.updatePost(id, post);
		dispatch({ type: 'UPDATE', payload: data });
	} catch (error) {
		console.log(error);
	}
};


export const deletePost = (id) => async (dispatch) => {
	try {
		// api.createPost is being imported from api where url is fetched using axios
		await api.deletePost(id);
		dispatch({ type: 'DELETE', payload: id });
	} catch (error) {
		console.log(error);
	}
};