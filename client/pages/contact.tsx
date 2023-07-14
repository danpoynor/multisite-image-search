import Container from '../components/container'

export const metadata = {
  title: "Contact",
  description: "You can reach us at contact@search.photos.",
}

export default function Contact() {
  return (
    // <main className="container mx-auto max-w-4xl p-4">
    <Container>
      <h1 className="text-2xl font-bold mt-8">{metadata.title}</h1>
      <p>{metadata.description}</p>
    </Container>
  );
}