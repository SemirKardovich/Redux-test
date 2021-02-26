import React from 'react'
import {Link} from 'react-router-dom'
const Navigation = () => {
    return (
        <ul className='nav-links'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/posts'>Posts</Link>
            </li>
            <li>
                <Link to='/comments'>Comments</Link>
            </li>
            <li>
                <Link to='/users'>Users</Link>
            </li>
            <li>
                <Link to='/photos'>Photos</Link>
            </li>
        </ul>
    )
}

export default Navigation
