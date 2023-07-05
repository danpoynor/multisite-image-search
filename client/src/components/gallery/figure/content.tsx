import Image from './image';
import Figcaption from './figcaption';

interface ImageProps {
  image: Photo;
}

export default function Content({ image }: ImageProps) {
  // Evaluate image sources and render the appropriate photo component

  // Pexels
  if (image.url?.includes('www.pexels.com/photo/')) {
    return (
      <>
        <a href={image.photographerUrl} target="_blank" rel="noopener noreferrer" className='bg-green-300'>
          <Image src={image.src.medium} alt={image.alt} />
        </a>
        <Figcaption>
          Photo provided by <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer" className='text-[var(--color-content-400)]'>Pexels</a>
        </Figcaption>
      </>
    );
  }

  // Unsplash
  if (image.urls?.small?.includes('images.unsplash.com/photo-')) {
    return (
      <>
        <a href={`${image.links.html}?utm_source=your_app_name&utm_medium=referral`} target="_blank" rel="noopener noreferrer">
          <Image src={image.urls.regular} alt={image.alt} />
        </a>
        <Figcaption>
          Photo by <a href={image.user.links.html} target="_blank" rel="noopener noreferrer" className='text-[var(--color-content-400)]'>{image.user.name}</a> on <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer" className='text-[var(--color-content-400)]'>Unsplash</a>
        </Figcaption>
      </>
    );
  }

  // Flickr
  // NOTE: image.id used here to make sure Flickr isn't returning 0
  // TODO: Displaying '0' seems to still be a bug sometimes
  if (image.farm && image.secret && image.id) {
    const imgSize = 'n';
    const url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_${imgSize}.jpg`;
    return (
      <>
        <a href={`https://www.flickr.com/photos/${image.owner}/${image.id}`} target="_blank" rel="noopener noreferrer">
          <Image src={url} alt={image.title} />
        </a>
        <Figcaption>
          Photo by <a href={`https://www.flickr.com/photos/${image.owner}`} target="_blank" rel="noopener noreferrer" className='text-[var(--color-content-400)]'>{image.owner}</a> on <a href="https://www.flickr.com/" target="_blank" rel="noopener noreferrer" className='text-[var(--color-content-400)]'>Flickr</a>
        </Figcaption>
      </>
    );
  }

}
