import React from 'react'

const ImageList = (props) => {

    const pics = props.images.map((img, i) => {
        return (
            <img style={{ width: '300px' }} className='imagelist' key={i} src={img.urls.regular} />
        )
    })


    return (
        <div>
            {pics}
        </div>
    )
}

export default ImageList
