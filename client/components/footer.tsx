import Container from '../components/container'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <Container flexNoWrap py4>
        <nav className="space-x-4">
          <Link href="/" className="cursor-pointer hover:text-[--color-content-500]">
            Home
          </Link>
          <Link href="/site-list" className="cursor-pointer hover:text-[--color-content-500]">
            Site List
          </Link>
          <Link href="/about" className="cursor-pointer hover:text-[--color-content-500]">
            About
          </Link>
          <Link href="/contact" className="cursor-pointer hover:text-[--color-content-500]">
            Contact
          </Link>
          <Link href="/login" className="cursor-pointer hover:text-[--color-content-500]">
            Login
          </Link>
        </nav>
        <p className="ml-auto text-xs opacity-50">&copy; 2023 Search.photos</p>
      </Container>
    </footer>
  );
}