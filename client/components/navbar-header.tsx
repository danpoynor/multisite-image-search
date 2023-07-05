import Link from 'next/link';

export default function HeaderNavbar() {
  return (
    <>
      <div className="flex items-center">
        <Link href="/" passHref>
          <span className="text-xl font-bold px-4 cursor-pointer">Search.photos</span>
        </Link>
        <nav className="space-x-4">
          <Link href="/" passHref>
            <span className="cursor-pointer hover:text-gray-300">Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className="cursor-pointer hover:text-gray-300">About</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="cursor-pointer hover:text-gray-300">Contact</span>
          </Link>
          <Link href="/login" passHref>
            <span className="cursor-pointer hover:text-gray-300">Login</span>
          </Link>
        </nav>
      </div>
      <button className="text-white font-bold px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600">
        Sign up
      </button>
    </>
  );
}