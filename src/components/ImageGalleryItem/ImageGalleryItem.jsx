import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled'

export default function ImageGalleryItem({largeImageURL, webformatURL, tags ,onClick}) {
    return (
       <GalleryItem >
            <GalleryItemImg src={webformatURL} alt={tags} onClick={onClick} data-link={largeImageURL} />
        </GalleryItem> 
    )
    
};
