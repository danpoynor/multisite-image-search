import Container from '../components/container'

export const metadata = {
  title: "About",
  description: "We are a company that provides high-quality photos for your projects.",
}

export default function About() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mt-8">{metadata.title}</h1>
      <p>{metadata.description}</p>
    </Container>
  );
}