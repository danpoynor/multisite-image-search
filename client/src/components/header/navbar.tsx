'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  return clsx('z-[1] rounded-md px-[.5rem] py-[.33rem] leading-8 transition-all', {
    'cursor-default text-[--color-content-300]': isActive,
    'cursor-pointer text-[--color-content-500] hover:text-[--color-content-100]': !isActive,
  });
}

export default function HeaderNavbar() {
  const { pathname } = useRouter();

  return (
    <>
      <div className="flex items-center">
        <Link href="/" passHref className={`${pathname === '/' ? 'cursor-default' : 'cursor-pointer'} block pr-4 text-xl font-bold`}>
          Search.photos
        </Link>

        <nav className="relative z-0 ml-4 space-x-4">

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
              className="absolute left-0 top-0 z-[-1] !m-0 h-8 rounded-md bg-[--color-primary] p-0"
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
