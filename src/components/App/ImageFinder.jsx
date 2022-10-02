import  { Component } from 'react'
import axios from 'axios';
import Loader from 'components/Loader/Loader';
// import fetch from 'components/API/fetch';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export default class ImageFinder extends Component {

    state = {
        items: [],
        loading: false,
        error: null,
        page: 1,
        query: "",
    };

    componentDidMount() {
        this.fetchImage();
        // fetch();
    }

    fetchImage() {
        const {query, page} = this.state;
this.setState ({
    loading: true,
});
const KEY = '29306254-f578092880d046ebab65c0a59';
const BASE_URL = 'https://pixabay.com/api'
const LIMIT = 12;

axios.get(`${BASE_URL}/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${LIMIT}`)
.then(({data}) => {
    this.setState (({items}) => {
console.log(data.hits)
console.log(items)
return {
    items: [...items, ...data.hits]
        }
    })
})
.catch(error => {
    this.setState({
        error
    })
})
.finally(() => 
    this.setState ({
        loading: false,
    })
)
    }
  render() {
    const {items, loading, error } = this.state;
    const isImage = Boolean(items.length);
    return (
      <div>
        {loading && <Loader />}
        {error && <p>Помилка</p>}
        {isImage && <ImageGallery items={items}/>}
      </div>
    )
  }
}
