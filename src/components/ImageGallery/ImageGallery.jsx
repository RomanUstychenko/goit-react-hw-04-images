import scss from "./ImageGallery.module.scss"
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({items}) => 
{
    console.log(items)
return (
        <ul className={scss.ImageGallery}>
            <ImageGalleryItem
            items={items} />
        </ul>
    )
}     