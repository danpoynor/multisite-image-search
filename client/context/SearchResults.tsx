import { createContext, useContext, useState } from 'react';

type SearchResultsContextType = {
  searchResults: string[];
  setSearchResults: (searchResults: string[]) => void;
};

const SearchResultsContext = createContext<SearchResultsContextType>({
  searchResults: [],
  setSearchResults: () => {},
});

type SearchResultsProviderProps = {
  children: React.ReactNode;
};

export function SearchResultsProvider({ children }: SearchResultsProviderProps) {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  return (
    <SearchResultsContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchResultsContext.Provider>
  );
}

export function useSearchResults() {
  return useContext(SearchResultsContext);
}