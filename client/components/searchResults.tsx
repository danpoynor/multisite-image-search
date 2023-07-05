import { Photo } from '../types';

interface Props {
  results: Photo[];
}

export default function SearchResults({ results }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {results.map((photo) => (
        <div key={photo.id}>
          {(photo.url?.includes('www.pexels.com/photo/')) && <PexelsPhoto photo={photo} />}
          {(photo.urls?.small?.includes('images.unsplash.com/photo-')) && <UnsplashPhoto photo={photo} />}
          {photo.source === 'flickr' && <FlickrPhoto photo={photo} />}
          {photo.source === 'googleImages' && <GoogleImagesPhoto photo={photo} />}
          {photo.source === 'pixabay' && <PixabayPhoto photo={photo} />}
          {photo.source === 'shutterstock' && <ShutterstockPhoto photo={photo} />}
          {photo.source === 'istockphoto' && <IStockPhoto photo={photo} />}
        </div>
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
      <a href={photo.photographerUrl} target="_blank" rel="noopener noreferrer">
        <img src={photo.src.medium} alt={photo.alt} />
      </a>
      <p>
        Photos provided by <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">Pexels</a>
      </p>
    </>
  );
}

// Unsplash
function UnsplashPhoto({ photo }: PhotoProps) {
  return (
    <>
      <a href={`${photo.links.html}?utm_source=your_app_name&utm_medium=referral`} target="_blank" rel="noopener noreferrer">
        <img src={photo.urls.regular} alt={photo.alt} />
      </a>
      <p>
        Photo by <a href={photo.user.links.html} target="_blank" rel="noopener noreferrer">{photo.user.name}</a> on <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>
      </p>
    </>
  );
}

// Flickr
function FlickrPhoto({ photo }: PhotoProps) {
  return (
    <>
      <a href={`https://www.flickr.com/photos/${photo.owner}/${photo.id}`} target="_blank" rel="noopener noreferrer">
        <img src={photo.image} alt={photo.title} />
      </a>
      <p>
        Photo by <a href={`https://www.flickr.com/photos/${photo.owner}`} target="_blank" rel="noopener noreferrer">{photo.ownername}</a> on <a href="https://www.flickr.com/" target="_blank" rel="noopener noreferrer">Flickr</a>
      </p>
    </>
  );
}

// Google Images
function GoogleImagesPhoto({ photo }: PhotoProps) {
  return (
    <>
      <a href={photo.contextLink} target="_blank" rel="noopener noreferrer">
        <img src={photo.src} alt={photo.alt} />
      </a>
      <p>
        Photo from <a href="https://images.google.com/" target="_blank" rel="noopener noreferrer">Google Images</a>
      </p>
    </>
  );
}

// Pixabay
function PixabayPhoto({ photo }: PhotoProps) {
  return (
    <a href={photo.pageURL} target="_blank" rel="noopener noreferrer">
      <img src={photo.webformatURL} alt={photo.tags} />
    </a>
  );
}

// Shutterstock
function ShutterstockPhoto({ photo }: PhotoProps) {
  return (
    <a href={photo.assets.preview.url} target="_blank" rel="noopener noreferrer">
      <img src={photo.assets.preview.url} alt={photo.description} />
    </a>
  );
}

// iStockPhoto
function IStockPhoto({ photo }: PhotoProps) {
  return (
    <a href={photo.largeThumbnailUrl} target="_blank" rel="noopener noreferrer">
      <img src={photo.largeThumbnailUrl} alt={photo.title} />
    </a>
  );
}