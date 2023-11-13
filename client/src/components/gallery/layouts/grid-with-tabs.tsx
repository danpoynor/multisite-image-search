import Figure from '../figure';
import { useSearch } from '@/context/SearchContext';
import { useState } from 'react';

export default function GridWithTabbedResults() {
  const {
    searchResults,
  } = useSearch();
  const [activeTab, setActiveTab] = useState(Object.keys(searchResults)[0]);

  return (
    <div className="flex w-auto flex-wrap gap-0 text-left [&>section:nth-child(n+2)]:mt-6">
      <div className="flex w-full gap-2 border-b-[1px] border-[var(--color-content-700)]">
        {Object.keys(searchResults).map((key) => (
          <button
            key={key}
            className={`rounded-t-lg px-4 py-2 ${activeTab === key
                ? 'bg-[var(--color-content-700)] text-[var(--color-content-300)]'
                : 'cursor-pointer bg-[var(--color-content-800)] text-[var(--color-content-300)]'
              }`}
            onClick={() => setActiveTab(key)}
          >
            <h3 className="text-sm font-normal">
              {key}:{' '}
              <span className="text-[var(--color-content-500)]">
                {searchResults[key].length} results
              </span>
            </h3>
          </button>
        ))}
      </div>
      <section>
        <div className="flex w-auto flex-wrap gap-0">
          {searchResults[activeTab].map((image) => (
            <Figure key={image.id} image={image} />
          ))}
        </div>
      </section>
    </div>
  );
}
