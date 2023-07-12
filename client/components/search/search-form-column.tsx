import { useState } from 'react';
import { searchPhotos } from './searchPhotos'
import { useSearchResults } from '../../context/SearchResults';
import SearchOptions from './search-options';

export default function SearchFormColumn() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedWebsites, setSelectedWebsites] = useState([]);
    const { setSearchResults } = useSearchResults();

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
        <div className="search-form-column">
            <form onSubmit={handleSubmit} className="flex flex-col w-full p-4">
                <div className='mb-4'>
                    <label className="block font-medium mb-2 mr-4 text-[--color-content-300]">Search Term or Phrase:</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                        placeholder="Search for photos"
                        className="border rounded-md w-full px-2 py-2 focus:outline-none bg-[var(--color-primary)] text-[--color-content-300]"
                    />
                </div>
                <div className='mb-4'>
                    <label className="block font-medium mb-2 mr-4 text-[--color-content-300]">Websites:</label>
                    <SearchOptions name="Unsplash" selectedWebsites={selectedWebsites} handleWebsiteSelectionChange={handleWebsiteSelectionChange} />
                    <SearchOptions name="Pexels" selectedWebsites={selectedWebsites} handleWebsiteSelectionChange={handleWebsiteSelectionChange} />
                    <SearchOptions name="Flickr" selectedWebsites={selectedWebsites} handleWebsiteSelectionChange={handleWebsiteSelectionChange} />
                </div>
                <div className='mb-4'>
                    <button type="submit" className="font-bold w-full px-2 py-3 rounded-md bg-[var(--color-primary)] text-[--color-content-300]">
                        SEARCH
                    </button>
                </div>
            </form>
        </div>
    );
}