import { useGallery } from '@/context/GalleryContext';
import { useSearch } from '@/context/SearchContext';

export default function Settings() {
  const {
    galleryLayout,
    availableLayouts,
    handleGalleryLayoutChange,
  } = useGallery();

  const {
    sortOrder,
    setSortOrder,
  } = useSearch();

  const handleChange = (event) => {
    handleGalleryLayoutChange(event);
    window.localStorage.setItem('galleryLayout', event.target.value);
  };

  return (
    <section className="flex w-full justify-end space-x-4">
      <div className="flex items-center justify-start">
        <label htmlFor="display" className="mr-2 block text-[--color-content-300]">Display: </label>
        <select
          id="display"
          className="rounded-md border-2 bg-[var(--color-primary)] p-1 pr-9 text-sm text-[--color-content-300] focus:outline-none"
          value={galleryLayout}
          onChange={handleChange}
        >
          {availableLayouts.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-start">
        <label htmlFor="sort" className="mr-2 block font-medium text-[--color-content-300]">Sort:</label>
        <select
          id="sort"
          className="rounded-md border-2 bg-[var(--color-primary)] p-1 pr-9 text-sm text-[--color-content-300] focus:outline-none"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="reverse">Reverse</option>
          <option value="forward">Forward</option>
        </select>
      </div>
    </section>
  )
}
