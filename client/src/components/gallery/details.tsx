import { useSearch } from '@/context/SearchContext';

export default function SearchResultsDetails() {
  const {
    searchTerm,
    searchResults,
  } = useSearch();

  const totalSearchResults = Object.keys(searchResults).reduce((acc, key) => {
    return acc + searchResults[key].length;
  }, 0);

  const searchResultKeysWithLengths = Object.keys(searchResults).map((key) => {
    return new Object({
      [key]: searchResults[key].length
    });
  });

  return (
    <section className="w-full">
      <h4 className="m-0">{totalSearchResults} results for “{searchTerm}”</h4>
      <ul className='mt-0 hidden list-none divide-y divide-[var(--color-content-700)] border-y border-[var(--color-content-600)] p-0'>
        {searchResultKeysWithLengths.map((item) => (
          <li key={Object.keys(item)[0]} className="flex items-center justify-start py-2">
            <span className="text-[var(--color-content-500)]">{Object.values(item)[0]}</span>&nbsp;:&nbsp;<span className="text-[var(--color-content-300)]">{Object.keys(item)[0]}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
