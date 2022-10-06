import React, { Component } from 'react'
import Searchbar from 'components/Searchbar/Searchbar'
import { searchImage } from 'components/API/fetch';
import Loader from 'components/Loader/Loader';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import {Button} from "components/Button/Button"
import Modal from 'components/Modal/Modal';


export default class Image extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    search: "",
    page: 1,
    modalOpen: false,
    modalImage: {
      largeImageURL: "",
    }
  };

  componentDidUpdate(__, prevState) {
    const {search, page} = this.state;
    if ((search && prevState.search !== search) || page > prevState.page){
        this.fetchImage(search, page);
    }
}

  async fetchImage()  {
    const {search, page} = this.state;
this.setState ({
loading: true,
})

try {
const data = await searchImage(search, page)
    this.setState (({items}) => {
return {
    items: [...items, ...data.hits]
        }
    })
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
  onSearch = ({search}) => {
    this.setState ({
      search,
    })
  }
  
  LoadMore = () => {
    this.setState (({page}) => {
        return {
            page: page + 1
        }
    })
};
closeModal = () => {
  this.setState ({
    modalOpen: false,
    modalImage: {
      largeImageURL: "",
    }
  })
};
openModal = (modalImage) => {
  this.setState ({
    modalOpen: true,
    modalImage
  })
};

  render() {
    const {items, loading, error, modalOpen, modalImage} = this.state;
    const {onSearch, closeModal, openModal} = this;
    const isImage = Boolean(items.length);
    return (
    <>
      <div>
        {modalOpen && <Modal onClose={closeModal}>
          <img src={modalImage.largeImageURL} alt="" />
          </Modal>}
      <Searchbar 
      onSubmit={onSearch}/>
        {loading && <Loader />}
        {error && <p>Помилка</p>}
        {isImage && <ImageGallery 
        items={items}
        onClick={openModal}
        />}
        {isImage && <Button onClick={this.LoadMore} />}

      </div>

      
    </>
    )
  }
}