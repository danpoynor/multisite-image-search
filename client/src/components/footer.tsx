import Link from 'next/link';
import Container from '@/components/container'

export default function Footer() {
  return (
    <footer>
      <Container flexNoWrap py4 fullWidth>
        <nav className="space-x-4 text-sm">
          <Link href="/" className="hover:text-[--color-content-500]">
            Home
          </Link>
          <Link href="/site-list" className="cursor-pointer hover:text-[--color-content-500]">
            Site List
          </Link>
          <Link href="/about" className="hover:text-[--color-content-500]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[--color-content-500]">
            Contact
          </Link>
          <Link href="/login" className="hover:text-[--color-content-500]">
            Login
          </Link>
          <Link href="/privacy" className="hover:text-[--color-content-500]">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-[--color-content-500]">
            Terms
          </Link>
        </nav>
        <p className="ml-auto text-xs text-[--color-content-500]">&copy; 2023 Search.photos</p>
      </Container>
    </footer>
  );
}
