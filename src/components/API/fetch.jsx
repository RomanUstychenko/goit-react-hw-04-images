import axios from 'axios';


const instance = axios.create({
    baseURL: "https://pixabay.com/api",
    params: {
        per_page: 12,
        key: "29306254-f578092880d046ebab65c0a59"
    }
})
export const getImage = async ( page=1) => {
    const {data} = await instance.get("/", {
        params: {
            page,
        }
    });
    return data
}
export const searchImage = async (q, page=1) => {
    const {data} = await instance.get("/", {
        params: {
            q,
            page,
        }
    });
    return data
}

const KEY = '29306254-f578092880d046ebab65c0a59';
const BASE_URL = 'https://pixabay.com/api';
const LIMIT = 12;

export const fetch = async (query, page) => {
    try {
        const response = await axios.get
        (`${BASE_URL}/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${LIMIT}`);
return response.data
    }
    catch (error) {
        console.log(error)
    }
}