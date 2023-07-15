import Container from '../components/container'

export const metadata = {
  title: "Terms",
  description: "TBS",
}

export default function Terms() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mt-8">{metadata.title}</h1>
      <p>{metadata.description}</p>
    </Container>
  );
}