import * as api from '../Api';

// Action creators

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        
        console.log(error.message);
    }
};

export const createPost = (post) =>  async (dispatch) => {
    
    try {

        // api.createPost is being imported from api where url is fetched using axios
        const { data } = await api.createPost(post);
        dispatch({type: 'NEW_POSTS', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}
