import { useState } from 'react';
import { searchPhotos } from './searchPhotos'
import SearchResults from './searchResults'

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
            <div className="flex items-center justify-between max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="flex items-center justify-center">
                    <div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchTermChange}
                            placeholder="Search for photos"
                            // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            className="border border-gray-300 rounded-l-md px-4 py-2 w-96 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-r-md">
                            Search
                        </button>
                    </div>
                    <div className="ml-8">
                        <label className="block font-medium mb-2">Websites</label>
                        <div>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    value="unsplash"
                                    checked={selectedWebsites.includes('unsplash')}
                                    onChange={handleWebsiteSelectionChange}
                                    className="form-checkbox h-5 w-5 text-blue-500"
                                />
                                <span className="ml-2">Unsplash</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input
                                    type="checkbox"
                                    value="pexels"
                                    checked={selectedWebsites.includes('pexels')}
                                    onChange={handleWebsiteSelectionChange}
                                    className="form-checkbox h-5 w-5 text-blue-500"
                                />
                                <span className="ml-2">Pexels</span>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-between max-w-4xl mx-auto mt-6">
                {SearchResults.length > 0 && <SearchResults results={searchResults} />}
            </div>
        </>
    );
}