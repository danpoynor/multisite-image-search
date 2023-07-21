// import { useSearchResults } from '../context/SearchResults';
import { useSearch } from '../context/SearchContext';
import SearchResults from './gallery/search-results'

export default function HomeIntro() {
    const { searchResults } = useSearch();

    return (
        <section className="w-full p-4 text-center">
            {!searchResults.length &&
                <h3 className="mt-32 text-2xl font-bold">Welcome!<br />Search for images on the left.</h3>
            }
            {searchResults.length > 0 && <SearchResults results={searchResults} />}
        </section>
    );
}
