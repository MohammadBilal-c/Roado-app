import React from 'react'
import Header from '../Components/header/Header'
import List from '../Components/List/List'
import AddBtn from '../Components/Add-Btn/AddBtn'

import axios from 'axios'

const HomePage = () => {
    const onSearchSubmit = async (term) => {
        const respons = await axios.get('https://jsonplaceholder.typicode.com/comments')
    }
    return (
        <>
            <Header onSubmit={onSearchSubmit} /><br />
            <List />
            {/* <AddBtn /> */}
        </>
    )
}

export default HomePage
