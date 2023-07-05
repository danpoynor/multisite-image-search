import Container from '@/components/container';
import PhotoSitesList from '@/components/site-list';

// NOTE: Another way to load client compoents within a server component is
// with {children} like in this example:
// https://github.com/vercel/next.js/discussions/51002

// Metadata for PhotoSites page
export const metadata = {
  title: 'Photo Sites List',
  description: 'Photo sites page',
};

// PhotoSites page component
export default function PhotoSites() {
  // Render Container component with page title, SearchBar component, and PhotoSitesTable component
  return (
    <Container>
      <h1 className="mt-8 text-2xl font-bold">{metadata.title}</h1>
      <p>{metadata.description}</p>
      <PhotoSitesList />
    </Container>
  );
}
