"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import { searchImages } from '@/components/search/search-images'

interface SearchHistoryItem {
  searchTerm: string;
}

interface SearchContextValue {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  selectedWebsites: string[];
  setSelectedWebsites: React.Dispatch<React.SetStateAction<string[]>>;
  searchResults: any[];
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
  searchHistory: SearchHistoryItem[];
  setSearchHistory: React.Dispatch<React.SetStateAction<SearchHistoryItem[]>>;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  handleRemoveItem: (index: number) => void;
  updateSearchTerm: (searchTerm: string) => void;
  handleRerunSearch: (searchTerm: string) => void;
  handleSearchSubmit: (_event: React.FormEvent<HTMLFormElement>) => void;
  handleSearchTermChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  handleWebsiteSelectionChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextValue>({
  searchTerm: '',
  setSearchTerm: () => { },
  selectedWebsites: [],
  setSelectedWebsites: () => { },
  searchResults: [],
  setSearchResults: () => { },
  searchHistory: [],
  setSearchHistory: () => { },
  activeIndex: -1,
  setActiveIndex: () => { },
  handleRemoveItem: () => { },
  updateSearchTerm: () => { },
  handleRerunSearch: () => { },
  handleSearchSubmit: () => { },
  handleSearchTermChange: () => { },
  handleWebsiteSelectionChange: () => { },
  searchResultsKeyCount: 0,
  sortOrder: 'forward',
  setSortOrder: () => { },
});

interface SearchProviderProps {
  children: React.ReactNode;
}

function countKeys(searchResults: SearchResult[]): number {
  const keys = new Set(Object.keys(searchResults));
  return keys.size;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWebsites, setSelectedWebsites] = useState(['unsplash', 'pexels', 'flickr']);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [searchResultsKeyCount, setSearchResultsKeyCount] = useState<number>(0);
  const [sortOrder, setSortOrder] = useState('forward');

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  useEffect(() => {
    const sortedSearchResults = { ...searchResults };
    for (const key in sortedSearchResults) {
      if (sortOrder === 'reverse') {
        sortedSearchResults[key].sort((a, b) => (a.id > b.id ? -1 : 1));
      } else {
        sortedSearchResults[key].sort((a, b) => (a.id < b.id ? -1 : 1));
      }
    }
    setSearchResults(sortedSearchResults);
  }, [sortOrder]);

  const handleRemoveItem = (index: number) => {
    setSearchHistory((prevHistory) => {
      const newHistory = prevHistory.filter((_, i) => i !== index);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      return newHistory;
    });
  };

  const updateSearchTerm = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setActiveIndex(-1);
  };

  const handleRerunSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim() === '') {
      alert('Please enter a search term.');
      return;
    }
    if (selectedWebsites.length === 0) {
      alert('Please select at least one website.');
      return;
    }

    const searchResults = await searchImages(searchTerm, selectedWebsites);
    const keysCount = countKeys(searchResults);

    setSearchResults(searchResults);
    setSearchResultsKeyCount(keysCount);
    setSearchHistory((prevHistory) => {
      const alreadyExists = prevHistory.some((item) => item.searchTerm === searchTerm);

      if (alreadyExists) {
        return prevHistory;
      }

      const newHistory = [{ searchTerm, timestamp: Date.now() }, ...prevHistory.slice(0, 4)];
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      return newHistory;
    });
  };

  // const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(event.target.value);
  // };

  const handleSearchTermChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
    setActiveIndex(-1); // Reset activeIndex when search term changes
  };

  // const handleWebsiteSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedWebsites(Array.from(event.target.selectedOptions, (option) => option.value));
  // };

  const handleWebsiteSelectionChange = (event: { target: { value: any; checked: any; }; }) => {
    const website = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedWebsites([...selectedWebsites, website]);
    } else {
      setSelectedWebsites(selectedWebsites.filter((w) => w !== website));
    }
  };

  const value: SearchContextValue = {
    searchTerm,
    setSearchTerm,
    selectedWebsites,
    setSelectedWebsites,
    searchResults,
    setSearchResults,
    searchHistory,
    setSearchHistory,
    activeIndex,
    setActiveIndex,
    handleRemoveItem,
    updateSearchTerm,
    handleRerunSearch,
    handleSearchSubmit,
    handleSearchTermChange,
    handleWebsiteSelectionChange,
    searchResultsKeyCount,
    setSortOrder,
    sortOrder,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export function useSearch() {
  return useContext(SearchContext);
}
