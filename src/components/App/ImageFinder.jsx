import  { Component } from 'react'
// import axios from 'axios';
import Loader from 'components/Loader/Loader';
import { fetch } from 'components/API/fetch';
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
    }

    fetchImage = async () => {
        const {query, page} = this.state;
this.setState ({
    loading: true,
});
const photos = await fetch(this.state.query, this.state.page);
// const KEY = '29306254-f578092880d046ebab65c0a59';
// const BASE_URL = 'https://pixabay.com/api'
// const LIMIT = 12;
console.log(photos)
// axios.get(`${BASE_URL}/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${LIMIT}`)
fetch(query, page)
.then(({data}) => {
    this.setState (({items}) => {
// console.log(fetch(query, page))
// console.log(items)
return {
    items: [...items, ...photos.hits]
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
