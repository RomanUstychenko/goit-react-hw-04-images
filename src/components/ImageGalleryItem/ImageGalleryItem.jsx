import scss from "./ImageGalleryItem.module.scss"
import PropTypes from 'prop-types';

// const ImageGalleryItem = ({items, onClick}) => {
//     console.log(items)

//     return (
//         <>
//             {items.map(item => (
//               <li 
//               className={scss.ImageGalleryItem}
//               key={item.id}
//               onClick={() => onClick(item.largeImageURL)}
//               >
//                 <img
//                 className={scss.ImageGalleryItemImage}
//                   src={item.webformatURL}
//                   alt={item.tags}
//                 />
//               </li>
//             ))}
//         </>  
//         )
// }     

const ImageGalleryItem = ({items, onClick}) => {
const element = items.map(({id, webformatURL, largeImageURL, tags}) => <li
className={scss.ImageGalleryItem}
key={id}
>
<img
 className={scss.ImageGalleryItemImage}
 src={webformatURL}
  alt={tags}
  onClick={() => onClick({largeImageURL})}
 />
</li>);
return <>{element}</>
}
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
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