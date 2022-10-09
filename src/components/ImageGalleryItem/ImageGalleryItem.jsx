import scss from "./ImageGalleryItem.module.scss"

const ImageGalleryItem = ({ webformatURL, tags, onClick}) => {

  return <img
  className={scss.ImageGalleryItemImage}
  src={webformatURL}
   alt={tags}
   onClick={onClick}
  />
  }


export default ImageGalleryItem;
