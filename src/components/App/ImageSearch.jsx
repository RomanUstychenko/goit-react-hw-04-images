import  { useState, useEffect } from 'react'
import Searchbar from 'components/Searchbar/Searchbar'
import { searchImage } from 'components/API/fetch';
import Loader from 'components/Loader/Loader';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import {Button} from "components/Button/Button"
import Modal from 'components/Modal/Modal';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
    if (!search) {
      return 
    }
            setLoading(true)
              const fetchImage = async () => {
                try {
          const data = await searchImage(search, page)
          data.hits.length === 0
          ? Notify.failure('There is no photo with this name')
          : setItems(items => [...items, ...data.hits]);
          
                } catch (error) {
                  setError(error)
                }
                finally {
                  setLoading(false)
                }
          };
          fetchImage ()
          }, [search, page]);

 const onSearch = (inputSearch) => {

  {if (search !== inputSearch) {
     setItems([]);
    setSearch(inputSearch);
    setPage(1);
      } else {
         setSearch(inputSearch)
      }
    }
  }
  
  const LoadMore = () => {
    setPage((prev) => prev + 1)
};

const closeModal = () => {
  setModalOpen(false)
  setModalImage({
    largeImageURL: "",
  })
};

const openModal = (modalImage) => {
  setModalOpen(true)
  setModalImage(modalImage)
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
};