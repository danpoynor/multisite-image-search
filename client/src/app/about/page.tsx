import Container from '@/components/container'

export const metadata = {
  title: "About",
  description: "Under construction.",
}

export default function About() {
  return (
    <Container>
      <h1 className="mt-8 text-2xl font-bold">{metadata.title}</h1>
      <p>{metadata.description}</p>
    </Container>
  );
}
