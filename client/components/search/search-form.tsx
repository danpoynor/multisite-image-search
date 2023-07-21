import { useEffect } from 'react';
import { useSearch } from '../../context/SearchContext';
import SearchOptions from './search-options';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import SearchHistory from '../search-history/search-history';

export default function SearchForm() {
    const {
        searchTerm,
        selectedWebsites,
        setSearchHistory,
        handleSearch,
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

    // const handleSearchTermChange = (event: React.FormEvent<HTMLFormElement>) => {
    //     setSearchTerm(event.target.value);
    //     setActiveIndex(-1); // Reset activeIndex when search term changes
    // };

    // const handleWebsiteSelectionChange = (event: React.FormEvent<HTMLFormElement>) => {
    //     const website = event.target.value;
    //     const isChecked = event.target.checked;
    //     if (isChecked) {
    //         setSelectedWebsites([...selectedWebsites, website]);
    //     } else {
    //         setSelectedWebsites(selectedWebsites.filter((w) => w !== website));
    //     }
    // };

    // const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     if (!searchTerm) {
    //         alert('Please enter a search term.');
    //         return;
    //     }
    //     if (selectedWebsites.length === 0) {
    //         alert('Please select at least one website.');
    //         return;
    //     }
    //     // Handle search query with searchTerm and selectedWebsites
    //     const results = await searchPhotos(searchTerm, selectedWebsites);

    //     // Update the search results displayed in the UI
    //     setSearchResults(results);

    //     // Add the new search term to the beginning of the array
    //     // setPastSearchTerms([searchTerm, ...pastSearchTerms.slice(0, 9)]);

    //     setSearchHistory([{ searchTerm}, ...searchHistory]);
    //     // setSearchTerm('');
    // };

    // const handleRemoveItem = (index: number) => {
    //     setSearchHistory(searchHistory.filter((_, i) => i !== index));
    // };

    // const updateSearchTerm = (searchTerm: string) => {
    //     setSearchTerm(searchTerm);
    // };

    // const handleRerunSearch = async (searchTerm: string) => {
    //     updateSearchTerm(searchTerm)
    //     handleSearch({ preventDefault: () => { } } as React.FormEvent<HTMLFormElement>);
    // };

    return (
        <div className="search-form-column">
            <form onSubmit={handleSearch} className="flex w-full flex-col p-4">
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
                    <label className="mb-2 mr-4 block font-medium text-[--color-content-300]">Select Websites to Search</label>
                    {/* <SearchOptions name="Unsplash" selectedWebsites={selectedWebsites} handleWebsiteSelectionChange={() => handleClickWebsiteSelectionChange()} />
                    <SearchOptions name="Pexels" selectedWebsites={selectedWebsites} handleWebsiteSelectionChange={() => handleClickWebsiteSelectionChange()} />
                    <SearchOptions name="Flickr" selectedWebsites={selectedWebsites} handleWebsiteSelectionChange={() => handleClickWebsiteSelectionChange()} /> */}
                    <SearchOptions name="Unsplash" selectedWebsites={selectedWebsites} handleWebsiteSelectionChange={handleWebsiteSelectionChange} />
                    <SearchOptions name="Pexels" selectedWebsites={selectedWebsites} handleWebsiteSelectionChange={handleWebsiteSelectionChange} />
                    <SearchOptions name="Flickr" selectedWebsites={selectedWebsites} handleWebsiteSelectionChange={handleWebsiteSelectionChange} />
                </div>
                <div className='mb-4'>
                    <div className="text-sm text-[--color-content-300]">
                        <button type="submit" className="w-full cursor-pointer rounded-md bg-[var(--accent-color)] px-2 py-3 font-bold text-[--color-content-300]">
                            SEARCH
                        </button>
                    </div>
                </div>

            </form>
            <SearchHistory />
        </div>
    );
}
