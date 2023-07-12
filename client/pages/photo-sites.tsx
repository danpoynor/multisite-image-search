import { useState, useEffect, useMemo, useRef } from 'react';
import Container from '../components/container';
import { PhotoSite } from '../types';
import Link from 'next/link';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { GridApi } from 'ag-grid-community';

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

// SearchBar component
interface SearchBarProps {
  setSearchText: (searchText: string) => void;
  filteredPhotoSites: PhotoSite[];
}

function SearchBar({ setSearchText, filteredPhotoSites }: SearchBarProps) {
  return (
    <div className="flex flex-nowrap justify-between items-center mb-4">
      <div className="relative flex items-center">
        <MagnifyingGlassIcon className="h-6 w-6 absolute left-2 text-gray-400" />
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
          aria-label="Search by name"
          className="pl-8 pr-3 py-2 w-72 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="flex justify-end">
        {/* Display the length of the filteredPhotoSites array */}
        Results: {filteredPhotoSites.length}
      </div>
    </div>
  );
}

// PhotoSitesTable component
interface PhotoSitesTableProps {
  photoSites: PhotoSite[];
}

function PhotoSitesTable({ photoSites }: PhotoSitesTableProps) {

  // Define columns for AgGridReact component
  const columnDefs = useMemo(
    () => [
      { headerName: 'ID', field: 'id', width: 50 },
      {
        headerName: 'Included',
        field: 'included',
        cellRenderer: function IncludedCellRenderer(params: { value: any }) {
          const included = params.value;
          return included ? (
            <span style={{ display: 'flex', justifyContent: 'center', color: 'green', fontWeight: 'bold' }}>&#10003;</span>
          ) : (
            <span style={{ display: 'flex', justifyContent: 'center', color: 'red', fontWeight: 'bold' }}>&#10007;</span>
          );
        },
        width: 96,
      },
      {
        headerName: 'Name',
        field: 'name',
        cellRenderer: function NameCellRenderer(params: { value: any, data: any }) {
          const url = params.data.site_url;
          return url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
              {params.value}
            </a>
          ) : (
            params.value
          );
        },
      },
      { headerName: 'API Documentation Link', field: 'api_documentation_link' },
      { headerName: 'Notes', field: 'notes', flex: 1 },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      // flex: 1,
      sortable: true,
    }),
    []
  );

  // Define state for search bar input value
  const [searchText, setSearchText] = useState('');

  // Render AgGridReact component with column definitions and photo sites data
  return (
    <div className="ag-theme-alpine-dark" style={{ height: '740px'  }}>
      <AgGridReact
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={photoSites}
        quickFilterText={searchText}
        pagination={true}
        paginationPageSize={15}
        rowSelection="single"
        animateRows={true}
      />
    </div>
  );
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
    return photoSites.filter((photoSite: PhotoSite) =>
      photoSite.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [photoSites, searchText]);

  // Render Container component with page title, SearchBar component, and PhotoSitesTable component
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-8">{metadata.title}</h1>
      <SearchBar setSearchText={setSearchText} filteredPhotoSites={filteredPhotoSites} />
      {filteredPhotoSites.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <PhotoSitesTable photoSites={filteredPhotoSites} />
      )}
    </Container>
  );
}
