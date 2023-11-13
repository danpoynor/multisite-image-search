"use client"

import Link from 'next/link';
import Container from '@/components/container';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface NavItem {
  page_name: string;
}

// Link object
const navItems: { [key: string]: NavItem } = {
  '/': {
    page_name: 'Home',
  },
  '/photo-sites': {
    page_name: 'Site List',
  },
  '/about': {
    page_name: 'About',
  },
  '/contact': {
    page_name: 'Contact',
  },
  '/account/signin': {
    page_name: 'Sign In',
  },
  '/privacy': {
    page_name: 'Privacy',
  },
};

function getLinkClassNames(isActive: boolean) {
  return clsx('z-[1] rounded-md px-[.5rem] py-[.33rem] leading-8 transition-all', {
    'cursor-default text-[--color-content-300]': isActive,
    'cursor-pointer text-[--color-content-500] hover:text-[--color-content-100]': !isActive,
  });
}

export default function Footer() {
  let pathname = usePathname() || '/';
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container flexNoWrap py4 fullWidth>
        <nav className="space-x-4 text-sm">
            {/* Create links from the link object */}
            {Object.entries(navItems).map(([path, { page_name }]) => {
              const isActive = pathname === path;

              return (
                <Link
                  key={path}
                  href={path}
                  className={`relative ${getLinkClassNames(isActive)}`}
                >
                  {page_name}
                </Link>
              );

            })}
        </nav>
        <p className="ml-auto text-xs text-[--color-content-500]">&copy; {currentYear} Dan Poynor</p>
      </Container>
    </footer>
  );
}
