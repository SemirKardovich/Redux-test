import {useEffect } from 'react';
import Comment from './Comment'
import { connect , useDispatch } from 'react-redux'
import { getComments } from '../../Actions'

const Comments = ({ comments, loading }) => {
    useEffect(() => {
        dispatch(getComments())
    }, [])

    const dispatch = useDispatch()
    
    if(loading){
        return <h1>Loading ...</h1>
    }

    return (
        <div className='comments'>
            {comments.map(comment => {
                return <Comment key={comment.id} comment={comment} />
            })}

        </div>
    )
}

const mapStateToProps = state => ({
    comments : state.comments.comments,
    loading : state.comments.loading
})

export default connect(mapStateToProps)(Comments);
