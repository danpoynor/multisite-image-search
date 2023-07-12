import Container from '../components/container'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <Container flexNoWrap py4>
        <nav className="space-x-4">
          <Link href="/about" className="cursor-pointer hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="cursor-pointer hover:text-gray-300">
            Contact
          </Link>
          <Link href="/login" className="cursor-pointer hover:text-gray-300">
            Login
          </Link>
        </nav>
        <p className="ml-auto text-xs opacity-50">&copy; 2021 Search.photos</p>
      </Container>
    </footer>
  );
}