import Container from '@/components/container'
import HeaderNavbar from './navbar'
import HeaderRight from './right';

export default function Header() {
  return (
    <header className="w-full">
      <Container flexNoWrap py4 fullWidth>
        <HeaderNavbar />
        <HeaderRight />
      </Container>
    </header>
  );
}
