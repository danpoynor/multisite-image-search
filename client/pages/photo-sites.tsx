import { useState, useEffect, useMemo } from 'react';
import Container from '../components/container';
import SearchBar from '../components/SearchBar';
import PhotoSitesTable from '../components/PhotoSitesTable';
import { PhotoSite } from '../types';

// Fetch photo sites data from JSON file
async function getPhotoSitesFromJson(): Promise<PhotoSite[]> {
  try {
    const res = await fetch('/data/photo-sites.json');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching photo sites:', error);
    return [];
  }
}

// Metadata for PhotoSites page
export const metadata = {
  title: 'Photo Sites List',
  description: 'Photo sites page',
};

// PhotoSites page component
export default function PhotoSites() {
  // Define state for photo sites data and search text
  const [photoSites, setPhotoSites] = useState<PhotoSite[]>([]);
  const [searchText, setSearchText] = useState('');

  // Fetch photo sites data from JSON file on component mount
  useEffect(() => {
    async function fetchPhotoSites() {
      try {
        const data = await getPhotoSitesFromJson();
        setPhotoSites(data);
      } catch (error) {
        console.error('Error fetching photo sites:', error);
      }
    }
    fetchPhotoSites();
  }, []);

  // Filter photo sites data based on search text
  const filteredPhotoSites = useMemo(() => {
    return photoSites.filter((photoSite) => {
      return (
        photoSite.name.toLowerCase().includes(searchText.toLowerCase()) ||
        photoSite.notes.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }, [photoSites, searchText]);

  // Render Container component with page title, SearchBar component, and PhotoSitesTable component
  return (
    <Container>
      <h1 className="text-2xl font-bold mt-8">{metadata.title}</h1>
      <SearchBar setSearchText={setSearchText} filteredPhotoSites={filteredPhotoSites} />
      {filteredPhotoSites.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <PhotoSitesTable photoSites={filteredPhotoSites} />
      )}
    </Container>
  );
}
