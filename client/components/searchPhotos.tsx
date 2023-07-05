import { createApi as createUnsplashClient } from 'unsplash-js';
import { createClient as createPexelsClient } from 'pexels';
import dotenv from 'dotenv';

// Get API Keys from environment variables
const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

// Check if environment variables are defined
if (!UNSPLASH_ACCESS_KEY) {
    throw new Error('Missing NEXT_PUBLIC_UNSPLASH_ACCESS_KEY');
}

if (!PEXELS_API_KEY) {
    throw new Error('Missing NEXT_PUBLIC_PEXELS_API_KEY');
}

// Create clients
const unsplashClient = createUnsplashClient({
    accessKey: UNSPLASH_ACCESS_KEY,
});

const pexelsClient = createPexelsClient(PEXELS_API_KEY);

// Export searchPhotos function
export async function searchPhotos(searchTerm: string, selectedWebsites: string[]) {
    try {
        let unsplashResults = [];
        let pexelsResults = [];

        // Unsplash
        if (selectedWebsites.includes('unsplash')) {
            const response = await unsplashClient.search.getPhotos({ query: searchTerm });
            if (response && response.response && response.response.results) {
                unsplashResults.push(...response.response.results);
            }
        }

        // Pexels
        if (selectedWebsites.includes('pexels')) {
            const response = await pexelsClient.photos.search({ query: searchTerm });
            if (response && response.photos) {
                pexelsResults = Array.isArray(response.photos) ? response.photos : Array.from(response.photos);
            }
        }

        const combinedResults = [...unsplashResults, ...pexelsResults];

        return combinedResults;
    } catch (error) {
        throw new Error('Failed to search for photos');
    }
}