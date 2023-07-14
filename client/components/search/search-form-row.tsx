import { useState } from 'react';
import { searchPhotos } from './search-photos'
import SearchResults from '../gallery/search-results'

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedWebsites, setSelectedWebsites] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleWebsiteSelectionChange = (event) => {
        const website = event.target.value;
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedWebsites([...selectedWebsites, website]);
        } else {
            setSelectedWebsites(selectedWebsites.filter((w) => w !== website));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!searchTerm) {
            alert('Please enter a search term.');
            return;
        }
        if (selectedWebsites.length === 0) {
            alert('Please select at least one website.');
            return;
        }
        // Handle search query with searchTerm and selectedWebsites
        const results = await searchPhotos(searchTerm, selectedWebsites);
        setSearchResults(results);
    };

    return (
        <>
            <div className="flex items-center justify-between mx-auto mt-8">
                <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col w-full">
                    <div className="ml-8" className="flex items-center justify-center">
                        <label className="block font-medium mb-2 mr-4">Websites:</label>
                        <div>
                            {/* Unsplash */}
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    value="unsplash"
                                    checked={selectedWebsites.includes('unsplash')}
                                    onChange={handleWebsiteSelectionChange}
                                    className="checkbox checkbox-primary"
                                />
                                <span className="ml-2">Unsplash</span>
                            </label>
                            {/* Pexels */}
                            <label className="inline-flex items-center ml-6">
                                <input
                                    type="checkbox"
                                    value="pexels"
                                    checked={selectedWebsites.includes('pexels')}
                                    onChange={handleWebsiteSelectionChange}
                                    className="checkbox checkbox-primary"
                                />
                                <span className="ml-2">Pexels</span>
                            </label>
                            {/* Flickr */}
                            <label className="inline-flex items-center ml-6">
                                <input
                                    type="checkbox"
                                    value="flickr"
                                    checked={selectedWebsites.includes('flickr')}
                                    onChange={handleWebsiteSelectionChange}
                                    className="checkbox checkbox-primary"
                                />
                                <span className="ml-2">Flickr</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchTermChange}
                            placeholder="Search for photos"
                            className="border border-gray-300 rounded-l-md px-4 py-4 w-96 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button type="submit" className="font-bold px-6 py-4 rounded-r-md">
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-between mt-6">
                {SearchResults.length > 0 && <SearchResults results={searchResults} />}
            </div>
        </>
    );
}