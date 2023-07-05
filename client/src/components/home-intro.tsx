"use client"

import { useSearch } from '@/context/SearchContext';
import WelcomeMessage from './welcome-message';
import SearchResults from '@/components/gallery'

export default function HomeIntro() {
  const {
    searchResults,
    searchResultsKeyCount,
  } = useSearch();

  return (
    <section className="w-full p-4 text-center">
      {searchResultsKeyCount === 0 && <WelcomeMessage />}
      {searchResultsKeyCount > 0 && <SearchResults results={searchResults} />}
    </section>
  );
}
