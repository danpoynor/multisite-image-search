import { useSearch } from '../../context/SearchContext';
import SearchHistoryItem from './search-history-item';

interface SearchHistoryItem {
    searchTerm: string;
}

export default function SearchHistory() {
    const { 
        searchHistory, 
        activeIndex 
    } = useSearch();

    return (
        <div className='w-full p-4'>
            <h4>Search History</h4>
            {searchHistory.length === 0 ? (
                <p className='pt-2 text-[var(--color-content-500)]'>No previous search terms found.</p>
            ) : (
                <ul className='mt-3 divide-y divide-[var(--color-content-700)] border-y border-[var(--color-content-600)] p-0'>
                    {searchHistory.map((item, index) => (
                        <SearchHistoryItem
                            key={index}
                            searchHistoryItemTerm={item.searchTerm}
                            isActive={index === activeIndex}
                            index={index}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}
