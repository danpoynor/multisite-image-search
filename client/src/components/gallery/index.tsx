import { useGallery } from '@/context/GalleryContext';
import Details from './details';
import Settings from './settings';
import GridWithRandomResults from './layouts/grid-with-random';
import GridGroupedBySource from './layouts/grid-grouped-by-source';
import GridWithSeparatedResults from './layouts/grid-with-separators';
import GridWithTabbedResults from './layouts/grid-with-tabs';


export default function Gallery() {
  const {
    galleryLayout,
  } = useGallery();

  return (
    <>
      <div className="mb-3 flex items-center justify-between text-start text-sm">
        <Details />
        <Settings />
      </div>
      {galleryLayout === 'grid_with_random_order' && <GridWithRandomResults />}
      {galleryLayout === 'grid_grouped_by_source' && <GridGroupedBySource />}
      {galleryLayout === 'grid_with_dividers' && <GridWithSeparatedResults />}
      {galleryLayout === 'grid_with_tabs' && <GridWithTabbedResults />}
    </>
  );
}
