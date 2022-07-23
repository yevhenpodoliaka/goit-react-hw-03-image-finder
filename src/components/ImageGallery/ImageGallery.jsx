import { Gallery,ImageGalleryItem,ImageGalleryItemImg } from './ImageGallery.styled'
export default function ImageGallery ({images}){
      return <Gallery >
        {images.map(img =><ImageGalleryItem key={img.id}>
          <ImageGalleryItemImg src={img.webformatURL} alt={img.tags} />
        </ImageGalleryItem>
          )} 
        </Gallery>

}


