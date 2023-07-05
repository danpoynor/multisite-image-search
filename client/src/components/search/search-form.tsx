"use client"

import { useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useSearch } from '@/context/SearchContext';
import SearchHistory from '@/components/search-history/search-history';
import SearchOptions from './search-options';
import { MAX_RESULTS } from '@/lib/constants';

export default function SearchForm() {
  const {
    searchTerm,
    selectedWebsites,
    setSearchHistory,
    handleSearchSubmit,
    handleSearchTermChange,
    handleWebsiteSelectionChange,
  } = useSearch();

  useEffect(() => {
    const storedSearchHistory = localStorage.getItem('searchHistory');
    if (storedSearchHistory) {
      setSearchHistory(JSON.parse(storedSearchHistory));
    }
  }, [setSearchHistory]);

  const handleClickWebsiteSelectionChange = () => {
    handleWebsiteSelectionChange;
  };

  return (
    <div className="search-form-column">
      <form onSubmit={handleSearchSubmit} className="flex w-full flex-col p-4">
        <label htmlFor="search" className="mb-2 mr-4 block font-medium text-[--color-content-300]">Search Term or Phrase</label>
        <div className="relative mb-4 flex items-center justify-stretch">
          <MagnifyingGlassIcon className="absolute left-2 top-2.5 h-6 w-6 text-[--color-content-500]" />
          <input
            id="search"
            type="search"
            value={searchTerm}
            onChange={handleSearchTermChange}
            placeholder="Search for photos"
            className="w-full rounded-md border-2 bg-[var(--color-primary)] p-2 pl-9 text-[--color-content-300] focus:outline-none"
          />
        </div>
        <div className='mb-4'>
          <label className="mr-4 block font-medium text-[--color-content-300]">Select Websites to Search</label>
          <p className="mb-3 text-xs text-[var(--color-content-500)]">Limited to {MAX_RESULTS} photos returned per site</p>
          <SearchOptions name="Unsplash" selectedWebsites={selectedWebsites} handleWebsiteSelectionChange={handleWebsiteSelectionChange} />
          <SearchOptions name="Pexels" selectedWebsites={selectedWebsites} handleWebsiteSelectionChange={handleWebsiteSelectionChange} />
          <SearchOptions name="Flickr" selectedWebsites={selectedWebsites} handleWebsiteSelectionChange={handleWebsiteSelectionChange} />
          <details className="ml-4 mt-5 text-xs text-[var(--color-content-500)]">
            <summary className="cursor-pointer">Additional APIs Under Consideration</summary>
            <ul className='ml-3 list-inside list-disc pl-0'>
              <li>123RF</li>
              <li>Cooper Hewitt</li>
              <li>Depositphotos</li>
              <li>Dreamstime</li>
              <li>Pixabay</li>
              <li>Rijksmuseum</li>
              <li>SmugMug</li>
              <li>Stocksy</li>
              <li>Stockvault</li>
              <li>The Met</li>
              <li>WordPress Openverse</li>
            </ul>
          </details>
        </div>
        <div className='mb-4'>
          <div className="text-sm text-[--color-content-300]">
            <button type="submit" className="w-full cursor-pointer rounded-md bg-[var(--accent-color)] px-2 py-3 font-bold text-[--color-white]">
              SEARCH
            </button>
          </div>
        </div>

      </form>
      <SearchHistory />
    </div>
  );
}
