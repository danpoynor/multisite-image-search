import { useSearch } from '../../context/SearchContext';

interface SearchHistoryItemProps {
    key: number;
    searchHistoryItemTerm: string;
    isActive: boolean;
    index: number;
}

export default function SearchHistoryItem({ searchHistoryItemTerm, isActive, index }: SearchHistoryItemProps) {
    const {
        handleRemoveItem,
        handleRerunSearch,
        handleSearchTermChange,
    } = useSearch();

    // Avoid the handleRemoveItem function from being called immediately with the index prop.
    // This ensures the handleRemoveItem function is only called when the button is clicked.
    const handleClickRemove = () => {
        handleRemoveItem(index);
    };

    const handleClickRerunSearch = () => {
        handleRerunSearch(searchHistoryItemTerm);
    };

    return (
        <li className={`flex w-full items-center justify-start gap-x-2 px-1 py-2 ${isActive ? 'bg-[var(--color-content-800)]' : ''}`}>
            <button
                onClick={() => handleClickRemove()}
                className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-[var(--color-content-800)] p-0.5 text-[var(--color-content-400)] hover:bg-[var(--color-content-700)]"
                title="Remove search term">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
            </button>
            <span>{searchHistoryItemTerm}</span>
            <button
                onClick={() => handleClickRerunSearch()}
                className={`ml-auto flex cursor-pointer items-center justify-center rounded-md bg-[var(--color-content-800)] p-1.5 text-xs text-[var(--color-content-400)] hover:bg-[var(--color-content-700)] ${isActive ? 'bg-[var(--color-content-700)]  hover:bg-[var(--color-content-600)]' : ''}`}
                title="Rerun search term"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mr-1 h-3 w-3"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z"
                        clipRule="evenodd"
                    />
                </svg>
                Rerun
            </button>
            <input
                type="text"
                value={searchHistoryItemTerm}
                onChange={handleSearchTermChange} // Call handleSearchTermChange on input change
                className="hidden"
            />
        </li>
    );
}
