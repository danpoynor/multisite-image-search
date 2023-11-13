import Figure from '../figure';
import { useSearch } from '@/context/SearchContext';

export default function GridWithSeparatedResults() {
  const {
    searchResults,
  } = useSearch();

  return (
    <div className="flex w-auto flex-wrap gap-0 text-left [&>section:nth-child(n+2)]:mt-6">
      {Object.keys(searchResults).map((key) => {
        const images = searchResults[key];
        return (
          <section key={key} className="w-full">
            <div className="relative mb-2 inline-flex w-full items-center justify-start">
              <hr className="absolute h-px w-full border-0 bg-[var(--color-content-700)]" />
              <div className="z-10 rounded-full bg-[var(--color-content-800)] px-4 py-2">
                <h3 className='text-sm font-normal'>{key}: <span className='text-[var(--color-content-500)]'>{images.length} results</span></h3>
              </div>
            </div>
            <div className='flex w-auto flex-wrap gap-0'>
              {images.map((image) => (
                <Figure key={image.id} image={image} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  )
}
