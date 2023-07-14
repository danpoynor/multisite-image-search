import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PhotoSite } from '../types';

interface SearchBarProps {
  setSearchText: (searchText: string) => void;
  filteredPhotoSites: PhotoSite[];
}

export default function SearchBar({ setSearchText, filteredPhotoSites }: SearchBarProps) {
  return (
    <div className="flex flex-nowrap justify-between items-center my-4">
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
