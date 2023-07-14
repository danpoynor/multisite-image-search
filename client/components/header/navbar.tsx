'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface NavItem {
  page_name: string;
  x: number;
  y: number;
  w: string;
}

// Link object
const navItems: {[key: string]: NavItem} = {
  '/': {
    page_name: 'Home',
    x: 0,
    y: 0,
    w: '60px',
  },
  '/photo-sites': {
    page_name: 'Site List',
    x: 74,
    y: 0,
    w: '76px',
  },
  '/about': {
    page_name: 'About',
    x: 164,
    y: 0,
    w: '62px',
  },
  '/contact': {
    page_name: 'Contact',
    x: 239,
    y: 0,
    w: '77px',
  },
};

function getLinkClassNames(isActive: boolean) {
  return clsx('transition-all z-[1] px-[.5rem] py-[.33rem] rounded-md leading-8', {
    'cursor-default text-[--color-content-300]': isActive,
    'cursor-pointer text-[--color-content-500] hover:text-[--color-content-100]': !isActive,
  });
}

export default function HeaderNavbar() {
  const { pathname } = useRouter();

  return (
    <>
      <div className="flex items-center">
        <Link href="/" passHref className={`${pathname === '/' ? 'cursor-default' : 'cursor-pointer'} text-xl font-bold pr-4 block`}>
          Search.photos
        </Link>

        <nav className="space-x-4 ml-4 relative z-0">

          {/* Create links from the link object */}
          {Object.entries(navItems).map(([path, {page_name}]) => {
            const isActive = pathname === path;

            return (
              <Link
                key={path}
                href={path}
                // style={{ outline: '1px solid red' }}
                className={getLinkClassNames(isActive)}
              >
                {page_name}
              </Link>
            );
          })}

          {/* Create the background shape and animate it */}
          {navItems[pathname] && (
            <motion.div
              className="absolute rounded-md h-8 top-0 left-0 !m-0 p-0 z-[-1] bg-[--color-primary]"
              initial={{
                opacity: 0,
                x: navItems[pathname].x,
                y: navItems[pathname].y,
                width: navItems[pathname].w
              }}
              animate={{
                opacity: .66,
                x: navItems[pathname].x,
                y: navItems[pathname].y,
                width: navItems[pathname].w,
              }}
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 30,
                duration: 0.3
              }}
            />
          )}
        </nav>

      </div>
    </>
  );
}
