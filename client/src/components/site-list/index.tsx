"use client"

import { useState, useEffect, useMemo } from 'react';
import SearchBar from './search-bar';
import PhotoSitesTable from './table';
import { PhotoSite } from '@/types';

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

export default function PhotoSitesList() {
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

  // Render SearchBar component and PhotoSitesTable component
  return (
    <>
      <SearchBar setSearchText={setSearchText} filteredPhotoSites={filteredPhotoSites} />
      {filteredPhotoSites.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <PhotoSitesTable photoSites={filteredPhotoSites} />
      )}
    </>
  );
}

