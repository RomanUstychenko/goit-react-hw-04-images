import scss from "./ImageGalleryItem.module.scss"


const ImageGalleryItem = ({items, onClick}) => {
    console.log(items)

    return (
        <>
            {items.map(item => (
              <li 
              className={scss.ImageGalleryItem}
              key={item.id}
              onClick={() => onClick(item.largeImageURL)}
              >
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