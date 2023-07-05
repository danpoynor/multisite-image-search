import Figure from '../figure';
import { useSearch } from '@/context/SearchContext';

export default function GridWithRandomResults() {
  const {
    searchResults,
  } = useSearch();

  // Create array of all images in random order
  const randomOrderImages = Object.values(searchResults).flat().sort(() => Math.random() - 0.5);

  return (
    <div className="flex w-auto flex-wrap justify-between gap-0 text-left">
      {randomOrderImages.map((image) => (
        <Figure key={image.id} image={image} />
      ))}
    </div>
  )
}
