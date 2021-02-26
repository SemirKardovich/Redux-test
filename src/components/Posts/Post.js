import React from 'react'

const Post = ({post}) => {
    return (
        <div className='post'>
            <h4 style={{marginBottom: '10px'}}>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    )
}

export default Post
