import {useEffect } from 'react';
import Photo from './Photo'
import { connect , useDispatch } from 'react-redux'
import { getPhotos } from '../../Actions'

const Photos = ({ photos, loading }) => {
    useEffect(() => {
        dispatch(getPhotos())
    }, [])

    const dispatch = useDispatch()
    if(loading){
        return <h1>Loading ...</h1>
    }
    return (
        <div className='photos'>
            {photos.map(photo => {
                return <Photo key={photo.id} photo={photo} />
            })}

        </div>
    )
}

const mapStateToProps = state => ({
    photos : state.photos.photos,
    loading : state.photos.loading
})

export default connect(mapStateToProps)(Photos);
