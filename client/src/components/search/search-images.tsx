import { createApi as createUnsplashClient } from 'unsplash-js';
import { createClient as createPexelsClient } from 'pexels';
import Flickr from 'flickr-sdk';
import { MAX_RESULTS, FORBIDDEN_WORDS } from 'src/lib/constants.tsx';

// Get API Keys from environment variables
const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;
const FLICKR_API_KEY = process.env.NEXT_PUBLIC_FLICKR_API_KEY

// Check if environment variables are defined
if (!UNSPLASH_ACCESS_KEY) {
  throw new Error('Missing NEXT_PUBLIC_UNSPLASH_ACCESS_KEY');
}

if (!PEXELS_API_KEY) {
  throw new Error('Missing NEXT_PUBLIC_PEXELS_API_KEY');
}

if (!FLICKR_API_KEY) {
  throw new Error('Missing NEXT_PUBLIC_FLICKR_API_KEY');
}

// Create clients
const unsplashClient = createUnsplashClient({
  accessKey: UNSPLASH_ACCESS_KEY,
});

const pexelsClient = createPexelsClient(PEXELS_API_KEY);

const flickr = new Flickr(FLICKR_API_KEY);

// Export searchImages function
// NOTE: I'm not using fetch() directly here.
// Instead I'm using provider specific libraries to retrieve images.
export async function searchImages(searchTerm: string, selectedWebsites: string[]) {
  try {
    let unsplashResults = [];
    let pexelsResults = [];
    let flickrResults = [];

    // Unsplash
    if (selectedWebsites.includes('unsplash')) {
      const response = await unsplashClient.search.getPhotos({
        query: searchTerm,
        perPage: MAX_RESULTS,
      });
      if (response && response.response && response.response.results) {
        unsplashResults.push(...response.response.results);
      }
    }

    // Pexels
    if (selectedWebsites.includes('pexels')) {
      const response = await pexelsClient.photos.search({
        query: searchTerm,
        per_page: MAX_RESULTS,
      });
      // @ts-ignore
      if (response && response.photos) {
        // @ts-ignore
        pexelsResults = Array.isArray(response.photos) ? response.photos : Array.from(response.photos);
      }
    }

    // Flickr
    if (selectedWebsites.includes('flickr')) {
      const response = await flickr.photos.search({
        text: searchTerm,
        safe_search: 1,
        extras: 'description,tags',
        per_page: MAX_RESULTS,
      });
      if (response && response.body && response.body.photos) {
        // Filter out photos with NSFW descriptions or tags
        let photos = Array.isArray(response.body.photos.photo) ? response.body.photos.photo : Array.from(response.body.photos.photo);
        flickrResults = photos.filter(photo => {
          const description = photo.description._content.toLowerCase();
          const tags = photo.tags.toLowerCase();
          return !FORBIDDEN_WORDS.some(keyword => description.includes(keyword) || tags.includes(keyword));
        });
      }
    }

    // Combine results with the name of the website
    unsplashResults = unsplashResults.map((result) => ({ ...result, website_name: 'Unsplash' }));
    pexelsResults = pexelsResults.map((result) => ({ ...result, website_name: 'Pexels' }));
    flickrResults = flickrResults.map((result) => ({ ...result, website_name: 'Flickr' }));

    // All for results to be displayed in groups with a divider between each group
    // So the  list of Unsplash images will be displayed, then a divider then the list of Pexels images, etc.
    // For each selected website, need to push each group of images to an object with a key of the website name for each group of images.
    // Then, map over the object and return the images for each website.
    const combinedResults = {};
    if (selectedWebsites.includes('unsplash')) {
      combinedResults['Unsplash'] = unsplashResults;
    }
    if (selectedWebsites.includes('pexels')) {
      combinedResults['Pexels'] = pexelsResults;
    }
    if (selectedWebsites.includes('flickr')) {
      combinedResults['Flickr'] = flickrResults;
    }

    return combinedResults;
  } catch (error: unknown) {
    throw new Error('Failed to search for images: ' + (error as Error).message || '');
  }
}
