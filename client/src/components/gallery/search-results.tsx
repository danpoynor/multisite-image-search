import { Photo } from '@/types';
import Figure from './figure';
import Figcaption from './figcaption';
import GalleryImage from './gallery-image';
import ToggleFavorite from './toggle-favorite';

interface Props {
  results: Photo[];
}

export default function SearchResults({ results }: Props) {
  return (
    <div className="flex w-auto flex-wrap justify-between gap-0">
      {results.map((photo) => (
        <Figure key={photo.id}>
          <ToggleFavorite />
          {/* Render the appropriate photo component based on the photo source */}
          {(photo.url?.includes('www.pexels.com/photo/')) && <PexelsPhoto photo={photo} />}
          {(photo.urls?.small?.includes('images.unsplash.com/photo-')) && <UnsplashPhoto photo={photo} />}
          {/* NOTE: photo.id used here to make sure Flickr isn't returning 0 */}
          {photo.farm && photo.secret && photo.id && <FlickrPhoto photo={photo} />}
        </Figure>
      ))}
    </div>
  );
}

interface PhotoProps {
  photo: Photo;
}

// Pexels
function PexelsPhoto({ photo }: PhotoProps) {
  return (
    <>
      <a href={photo.photographerUrl} target="_blank" rel="noopener noreferrer" className='bg-green-300'>
        <GalleryImage src={photo.src.medium} alt={photo.alt} />
      </a>
      <Figcaption>
        Photos provided by <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer" className='text-[var(--color-content-400)]'>Pexels</a>
      </Figcaption>
    </>
  );
}

// Unsplash
function UnsplashPhoto({ photo }: PhotoProps) {
  return (
    <>
      <a href={`${photo.links.html}?utm_source=your_app_name&utm_medium=referral`} target="_blank" rel="noopener noreferrer">
        <GalleryImage src={photo.urls.regular} alt={photo.alt} />
      </a>
      <Figcaption>
        Photo by <a href={photo.user.links.html} target="_blank" rel="noopener noreferrer" className='text-[var(--color-content-400)]'>{photo.user.name}</a> on <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer" className='text-[var(--color-content-400)]'>Unsplash</a>
      </Figcaption>
    </>
  );
}

// Flickr
function FlickrPhoto({ photo }: PhotoProps) {
  const imgSize = 'n';
  const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${imgSize}.jpg`;
  return (
    <>
      <a href={`https://www.flickr.com/photos/${photo.owner}/${photo.id}`} target="_blank" rel="noopener noreferrer">
        <GalleryImage src={url} alt={photo.title} />
      </a>
      <Figcaption>
        Photo by <a href={`https://www.flickr.com/photos/${photo.owner}`} target="_blank" rel="noopener noreferrer" className='text-[var(--color-content-400)]'>{photo.owner}</a> on <a href="https://www.flickr.com/" target="_blank" rel="noopener noreferrer" className='text-[var(--color-content-400)]'>Flickr</a>
      </Figcaption>
    </>
  );
}
