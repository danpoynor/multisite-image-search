import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PhotoSite } from '../types';

interface SearchBarProps {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  filteredPhotoSites: PhotoSite[];
}

export default function SearchBar({ setSearchText, filteredPhotoSites }: SearchBarProps) {
  return (
    <div className="my-4 flex flex-nowrap items-center justify-between">
      <div className="relative flex items-center">
        <MagnifyingGlassIcon className="absolute left-2 h-6 w-6 text-gray-400" />
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
          aria-label="Search by name"
          className="w-72 rounded-md border border-gray-300 py-2 pl-8 pr-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-end">
        {/* Display the length of the filteredPhotoSites array */}
        Results: {filteredPhotoSites.length}
      </div>
    </div>
  );
}
