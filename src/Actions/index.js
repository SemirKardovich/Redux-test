import axios from 'axios'

export const getPosts =  () => async dispatch => {
    setLoading()
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const data = await res.data
    dispatch ({
        type: 'GET_POSTS',
        payload: data
    });
}

export const getComments =  () => async dispatch => {
    setLoading()
    const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
    const data = await res.data
    dispatch ({
        type: 'GET_COMMENTS',
        payload: data
    });
}

export const getUsers =  () => async dispatch => {
    setLoading()
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = await res.data
    dispatch ({
        type: 'GET_USERS',
        payload: data
    });
}

export const getPhotos =  () => async dispatch => {
    setLoading()
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
    const data = await res.data
    dispatch ({
        type: 'GET_PHOTOS',
        payload: data
    });
}

export const setLoading = () => {
    return {
        type: 'SET_LOADING'
    };
}