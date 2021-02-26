import React from 'react'

const Comment = ({comment}) => {
    return (
        <div className='comment'>
            <h3>Name : {comment.name}</h3>
            <p><strong>E-mail</strong> : {comment.email}</p>
            <p><strong>Comment</strong> : {comment.body}</p>
        </div>
    )
}

export default Comment
