import Link from 'next/link';
import Container from '@/components/container'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container flexNoWrap py4 fullWidth>
        <nav className="space-x-4 text-sm">
          <Link href="/" className="hover:text-[--color-content-500]">
            Home
          </Link>
          <Link href="/photo-sites" className="cursor-pointer hover:text-[--color-content-500]">
            Site List
          </Link>
          <Link href="/about" className="hover:text-[--color-content-500]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[--color-content-500]">
            Contact
          </Link>
          <Link href="/account/signin" className="hover:text-[--color-content-500]">
            Login
          </Link>
          <Link href="/privacy" className="hover:text-[--color-content-500]">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-[--color-content-500]">
            Terms
          </Link>
        </nav>
        <p className="ml-auto text-xs text-[--color-content-500]">&copy; {currentYear} Search.photos</p>
      </Container>
    </footer>
  );
}
