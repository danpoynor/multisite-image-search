import { ReactNode, useEffect } from 'react';
import Container from '../container'
import HeaderNavbar from './navbar'
import HeaderRight from './right';

import { themeChange } from 'theme-change'
import ThemeChooser from './theme-chooser'

export default function Header() {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <header className="w-full">
      <Container flexNoWrap py4 fullWidth>
        <HeaderNavbar />
        <HeaderRight />
      </Container>
    </header>
  );
}