'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { LayoutGroup, motion } from 'framer-motion';

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
};

function getLinkClassNames(isActive: boolean) {
  return clsx('z-[1] rounded-md px-[.5rem] py-[.33rem] leading-8 transition-all', {
    'cursor-default text-[--color-content-300]': isActive,
    'cursor-pointer text-[--color-content-500] hover:text-[--color-content-100]': !isActive,
  });
}

export default function Navbar() {
  let pathname = usePathname() || '/';

  return (
    <>
      <div className="flex items-center">
        <Link href="/" passHref className={`${pathname === '/' ? 'cursor-default' : 'cursor-pointer'} block pr-4 text-xl font-bold`}>
          Search.photos
        </Link>

        <LayoutGroup>
          <nav className="relative z-0 ml-4 space-x-4">

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
                  {path === pathname ? (
                    <motion.div
                      className="absolute inset-0 z-[-1] h-8 rounded-md bg-[--color-content-950]"
                      layoutId="sidebar"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30
                      }}
                    />
                  ) : null}
                </Link>
              );

            })}
          </nav>
        </LayoutGroup>

      </div>
    </>
  );
}
