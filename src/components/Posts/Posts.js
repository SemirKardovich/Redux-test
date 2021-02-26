import {useEffect } from 'react';
import Post from './Post'
import { connect , useDispatch } from 'react-redux'
import { getPosts } from '../../Actions'

const Posts = ({ posts, loading }) => {
    useEffect(() => {
        dispatch(getPosts())
    }, [])

    const dispatch = useDispatch()
    
    if(loading){
        return <h1>Loading ...</h1>
    }

    return (
        <div className='posts'>
            {posts.map(post => {
                return <Post key={post.id} post={post} />
            })}

        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    loading: state.posts.loading
})

export default connect(mapStateToProps)(Posts);
