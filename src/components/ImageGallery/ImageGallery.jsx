import { Gallery } from './ImageGallery.styled'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
export default function ImageGallery ({images,onClick}){
  return <Gallery>
    {images.map(img => <ImageGalleryItem key={img.id}
      webformatURL={img.webformatURL}
      largeImageURL={img.largeImageURL}
      tags={img.tags}
      onClick={ onClick} />)
                            } 
      </Gallery>

}


