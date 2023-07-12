import Container from '../components/container'

export const metadata = {
  title: "About",
  description: "About page",
}

export default function About() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mt-8">About Us</h1>
      <p>We are a company that provides high-quality photos for your projects.</p>
    </Container>
  );
}