import { useSearchResults } from '../context/SearchResults';
import SearchResults from './search/searchResults'

export default function HomeIntro() {
    const { searchResults } = useSearchResults();

    return (
        <section className="text-center p-4 w-full">
            {!searchResults.length &&
                <h3 className="text-2xl font-bold mt-32">Welcome!<br />Search for images on the left.</h3>
            }
            <div className="flex">
                {searchResults.length > 0 && <SearchResults results={searchResults} />}
            </div>
        </section>
    );
}
