import {useEffect } from 'react';
import User from './User'
import { connect , useDispatch } from 'react-redux'
import { getUsers } from '../../Actions'

const Users = ({ users,loading }) => {
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const dispatch = useDispatch()
    
    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div className='users'>
            {users.map(user => {
                return <User key={user.id} user={user} />
            })}

        </div>
    )
}

const mapStateToProps = state => ({
    users : state.users.users,
    loading : state.users.loading
})

export default connect(mapStateToProps)(Users);
