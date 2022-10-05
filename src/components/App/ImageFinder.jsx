import  { Component } from 'react'
// import axios from 'axios';
import Loader from 'components/Loader/Loader';
// import { fetch } from 'components/API/fetch';
import { getImage } from 'components/API/fetch';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import {Button} from "components/Button/Button"
 
export default class ImageFinder extends Component {

    state = {
        items: [],
        loading: false,
        error: null,
        page: 1,
        query: "",
        key: "29306254-f578092880d046ebab65c0a59"
    };

    componentDidMount() {
        this.fetchImage();
    };
    componentDidUpdate(__, prevState) {
        const {page} = this.state;
        if (prevState.page !== page) {
            this.fetchImage();
        }
    }


async fetchImage()  {
        const {query, page, key} = this.state;
this.setState ({
    loading: true,
})

try {
    const data = await getImage(key, page)
        // fetch(query, page)
    // .then((data) => {
        this.setState (({items}) => {
    return {
        items: [...items, ...data.hits]
            }
        })
    // }
    // )
} catch (error) {
    this.setState({
                error
            })
}
finally {
    this.setState ({
                loading: false,
            })
}
};

//     fetchImage = async () => {
//         const {query, page} = this.state;
// this.setState ({
//     loading: true,
// });

// await fetch(query, page)
// .then((data) => {
//     this.setState (({items}) => {
// return {
//     items: [...items, ...data.hits]
//         }
//     })
// })
// .catch(error => {
//     this.setState({
//         error
//     })
// })
// .finally(() => 
//     this.setState ({
//         loading: false,
//     })
// )
    // };
LoadMore = () => {
    this.setState (({page}) => {
        return {
            page: page + 1
        }
    })
}
  render() {
    const {items, loading, error } = this.state;
    const isImage = Boolean(items.length);
    return (
      <div>
        {loading && <Loader />}
        {error && <p>Помилка</p>}
        {isImage && <ImageGallery items={items}/>}
        {isImage && <Button onClick={this.LoadMore} />}
      </div>
    )
  }
}
