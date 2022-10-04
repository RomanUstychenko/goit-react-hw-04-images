import axios from 'axios';

const KEY = '29306254-f578092880d046ebab65c0a59';
const BASE_URL = 'https://pixabay.com/api';
const LIMIT = 12;

export const fetch = async (query, page) => {
    try {
        const response = await axios.get
        (`${BASE_URL}/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${LIMIT}`);
        console.log(response.data)
return response.data
    }
    catch (error) {
        console.log(error)
    }
}