import { Gallery } from './ImageGallery.styled'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
export default function ImageGallery ({images}){
  return <Gallery>
             {images.map(img => <ImageGalleryItem key={img.id}
                            webformatURL={img.webformatURL}
                            tags={img.tags}/>)} 
      </Gallery>

}


