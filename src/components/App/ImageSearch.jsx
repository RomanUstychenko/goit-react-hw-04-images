// import React, { Component } from 'react'
import  { useState, useEffect } from 'react'
import Searchbar from 'components/Searchbar/Searchbar'
import { searchImage } from 'components/API/fetch';
import Loader from 'components/Loader/Loader';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import {Button} from "components/Button/Button"
import Modal from 'components/Modal/Modal';

export default function ImageSearch() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({
    largeImageURL: "",
  });

  useEffect(() => {
    console.log('first')
    if (!search) {
      return;}
          // return () => {
          //   console.log('second')
          //   if (setSearch((prev) => prev !== search) || setPage((prev) => page > prev))
          //   {

            console.log('second')
              const fetchImage = async () => {
                setLoading(true)
          
                try {
          const data = await searchImage(search, page)
                setItems((items) => {
                  return [...items, ...data.hits]
                      })
                } catch (error) {
                  setError(error)
                }
                finally {
                  setLoading(false)
                }
          };
          fetchImage ()
                  }, [search, page])

        // useEffect(() => {
        //   if (!search) {
        //     return;
        //   }
        //   const findImages = async () => {
        //     try {
        //       setIsLoading(true);
        //       const photos = await fetchData(value, page);
        //       photos.hits.length === 0
        //         ? Notify.failure(
        //             'Sorry! There is no photo with this name. Try something else!'
        //           )
        //         : setImages(images => [...images, ...photos.hits]);
        //     } catch (error) {
        //       console.log(error);
        //     } finally {
        //       setIsLoading(false);
        //     }
        //   };
      
        //   findImages();
        // }, [value, page]);


 const onSearch = (search) => {
console.log(search)
  setSearch((prev) => {if (prev === search) {
    return setSearch(search);
      } else {
        return setItems([]),
                setSearch(""),
                setPage(1)
      }
    });
  }
  
  const LoadMore = () => {
    setPage((prev) => prev +1)
};

const closeModal = () => {
  setModalOpen(false)
  setModalImage({
    largeImageURL: "",
  })
};

const openModal = (modalImage) => {
  setModalOpen(false)
  setModalOpen(modalImage)
  // this.setState ({
  //   modalOpen: true,
  //   modalImage
  // })
};

const isImage = Boolean(items.length);
  return (
    <>
        {modalOpen && <Modal onClose={closeModal}>
          <img src={modalImage.largeImageURL} alt="" />
          </Modal>}
      <Searchbar 
      onSubmit={onSearch}/>
      <div>
        {loading && <Loader />}
        {error && <p>Помилка</p>}
        {isImage && <ImageGallery 
        items={items}
        onClick={openModal}
        />}
        {isImage && <Button onClick={LoadMore} />}
      </div>
    </>
    )
}

// export default class ImageSearch extends Component {
//   state = {
//     items: [],
//     loading: false,
//     error: null,
//     search: "",
//     page: 1,
//     modalOpen: false,
//     modalImage: {
//       largeImageURL: "",
//     }
//   };

//   componentDidUpdate(__, prevState) {
//     const {search, page} = this.state;
//     if ((search && prevState.search !== search) || page > prevState.page){
//         this.fetchImage(search, page);
//     }
// }

//   async fetchImage()  {
//     const {search, page} = this.state;
// this.setState ({
// loading: true,
// })

// try {
// const data = await searchImage(search, page)
//     this.setState (({items}) => {
// return {
//     items: [...items, ...data.hits]
//         }
//     })
// } catch (error) {
// this.setState({
//             error
//         })
// }
// finally {
// this.setState ({
//             loading: false,
//         })
// }
// };
//   onSearch = ({search}) => {

//     this.setState(prevState => {
//       if (prevState.search === search) {
//         return ;
//       } else {
//         return this.setState ({ 
//           items: [], 
//           search, 
//           page: 1, 
//         });
//       }
//     });
//   }
  
//   LoadMore = () => {
//     this.setState (({page}) => {
//         return {
//             page: page + 1
//         }
//     })
// };
// closeModal = () => {
//   this.setState ({
//     modalOpen: false,
//     modalImage: {
//       largeImageURL: "",
//     }
//   })
// };
// openModal = (modalImage) => {
//   this.setState ({
//     modalOpen: true,
//     modalImage
//   })
// };

//   render() {
//     const {items, loading, error, modalOpen, modalImage} = this.state;
//     const {onSearch, closeModal, openModal} = this;
//     const isImage = Boolean(items.length);
//     return (
//     <>
//         {modalOpen && <Modal onClose={closeModal}>
//           <img src={modalImage.largeImageURL} alt="" />
//           </Modal>}
//       <Searchbar 
//       onSubmit={onSearch}/>
//       <div>
//         {loading && <Loader />}
//         {error && <p>Помилка</p>}
//         {isImage && <ImageGallery 
//         items={items}
//         onClick={openModal}
//         />}
//         {isImage && <Button onClick={this.LoadMore} />}
//       </div>
//     </>
//     )
//   }
// }