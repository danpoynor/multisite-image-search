import Figure from '../figure';
import { useSearch } from '@/context/SearchContext';

export default function GridGroupedBySource() {
  const {
    searchResults,
  } = useSearch();

  // Create and array of all images from the results object without the keys
  const images = Object.values(searchResults).flat();

  return (
    <div className="flex w-auto flex-wrap justify-between gap-0">
      {images.map((image) => (
        <Figure key={image.id} image={image} />
      ))}
    </div>
  )
}
