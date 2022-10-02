import scss from "./ImageGalleryItem.module.scss"


const ImageGalleryItem = ({items}) => {
    console.log(items)

    return (
        <>
            {items.map(item => (
              <li 
              className={scss.ImageGalleryItem}
              key={item.id}>
                <img
                className={scss.ImageGalleryItemImage}
                  src={item.webformatURL}
                  alt={item.tags}
        
                //   bigUrl={image.largeImageURL}
                />
              </li>
            ))}
          
        </>
        )
}     

export default ImageGalleryItem;