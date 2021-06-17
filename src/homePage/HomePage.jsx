import React, { useState } from 'react'
import Header from '../Components/header/Header'
import List from '../Components/List/List'
import AddBtn from '../Components/Add-Btn/AddBtn'

import ImageList from '../Components/imageList/ImageList'

import api from '../api/api'
// import axios from 'axios'

const HomePage = () => {

    const [img, setImg] = useState([])

    const onSearchSubmit = async (term) => {
        const response = await api.get('/search/photos', {
            params: { query: term },


        })

        setImg(response.data.results)

    }
    return (
        <>
            <Header onSubmit={onSearchSubmit} /><br />
            <ImageList images={img} />
            <List />
            {/* <AddBtn /> */}
        </>
    )
}

export default HomePage
