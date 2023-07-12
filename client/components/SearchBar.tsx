import { useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface Props {
  placeholder: string;
  onSearch: (searchText: string) => void;
}

export default function SearchBar({ placeholder, onSearch }: Props) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleClear = () => {
    setSearchText('');
    onSearch('');
  };

  return (
    <div className="relative flex items-center">
      <MagnifyingGlassIcon className="h-6 w-6 text-blue-500 absolute left-2 text-gray-400" />
      <input
        type="search"
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        aria-label="Search by name"
        className="pl-8 pr-3 py-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
    </div>
  );
}