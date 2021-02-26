import React from 'react'

const Photo = ({photo}) => {
    return (
        <div className='photo'>
            <h4 style={{marginBottom : '10px', textAlign : 'center'}}>{photo.title}</h4>
            <img src={photo.url} alt="jsonplaceholder photo" className='js-img'/>
        </div>
    )
}

export default Photo
