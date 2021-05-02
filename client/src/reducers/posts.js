/* eslint-disable import/no-anonymous-default-export */
export default (posts=[], action) => {

    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'NEW_POSTS':
            return [...posts, action.payload];
       
    
        default:
            return posts;
    }
    
}