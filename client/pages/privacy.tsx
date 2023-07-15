import Container from '../components/container'

export const metadata = {
  title: "Privacy",
  description: "TBD",
}

export default function Privacy() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mt-8">{metadata.title}</h1>
      <p>{metadata.description}</p>
    </Container>
  );
}