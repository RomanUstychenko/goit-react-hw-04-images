import scss from "./ImageGallery.module.scss"
import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
   

export const ImageGallery = ({items, onClick}) => {
return (
        <ul className={scss.ImageGallery}>
            {items.map(({id, webformatURL, largeImageURL, tags}) => 
        <li
        className={scss.ImageGalleryItem}
        key={id} >
        <ImageGalleryItem
            
            webformatURL={webformatURL}
            tags={tags}
            onClick={() => onClick({largeImageURL})}
             />
        </li>)}
        </ul>
    )};

    ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};