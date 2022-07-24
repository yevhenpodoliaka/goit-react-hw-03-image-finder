import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled'

export default function ImageGalleryItem({ webformatURL, tags }) {
    return (
       <GalleryItem >
          <GalleryItemImg src={webformatURL} alt={tags} />
        </GalleryItem> 
    )
    
};
