import React from 'react'

const User = ({user}) => {
    return (
        <div className='user'>
           <strong>Name</strong> : {user.name}
           <br/>
           <strong>E-mail</strong> : {user.email}
           <br/>
           <strong>Website</strong> : {user.website}
        </div>
    )
}

export default User
