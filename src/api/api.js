import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5Zq8lyHTdMHehvlkjvYq5TxaFjJ9SwjhIPXbCtjhV4w'
    }
})