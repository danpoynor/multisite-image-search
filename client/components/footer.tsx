import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-6">
        <div className="flex items-center justify-between max-w-4xl mx-auto p-4">
            <nav className="space-x-4">
                <Link href="/about">
                <span className="cursor-pointer hover:text-gray-300">About</span>
                </Link>
                <Link href="/contact">
                <span className="cursor-pointer hover:text-gray-300">Contact</span>
                </Link>
                <Link href="/login">
                <span className="cursor-pointer hover:text-gray-300">Login</span>
                </Link>
            </nav>
            <p className="ml-auto">&copy; 2021 Search.photos</p>
      </div>
    </footer>
  );
}