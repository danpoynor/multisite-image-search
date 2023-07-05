import HomeIntro from '@/components/home-intro'
import SearchForm from '@/components/search/search-form'
import { SearchProvider } from '@/context/SearchContext'
import { GalleryProvider } from '@/context/GalleryContext'
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata = {
  title: "Home",
  description: "Home page",
  URL: "https://search.photos",
  siteName: "Search.photos",
  twitterUsername: "@searchphotos",
  keywords: ["search", "photos", "images", "image search", "photo search", "search photos", "search images", "search.photos", "search.photos images", "search.photos photos", "search.photos image search", "search.photos photo search", "search.photos search photos", "search.photos search images", "search.photos search", "search.photos.photos", "search.photos.images", "search.photos image", "search.photos photo", "search.photos search", "search.photos search photos", "search.photos search images", "search.photos search.photos", "search.photos search.photos photos", "search.photos search.photos images", "search.photos search.photos image", "search.photos search.photos photo", "search.photos search.photos search", "search.photos search.photos search photos", "search.photos search.photos search images", "search.photos search.photos search.photos"],
  locale: "en_US",
  type: "website",
  image: "/images/search-photos-logo.png",
}

export default function Home() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <GalleryProvider>
          <SearchForm />
          <HomeIntro />
        </GalleryProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}
