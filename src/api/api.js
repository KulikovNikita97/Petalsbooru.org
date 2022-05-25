import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://derpibooru.org/pages/api/',
    headers: {
        'API-KEY': 't4PB6GtW78vqJ31rsyPP'
    }
});

