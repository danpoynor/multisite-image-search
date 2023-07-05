import Container from '@/components/container'

export const metadata = {
  title: "404 - Page Not Found",
  description: "Doh! An error occurred.",
}

export default function Contact() {
  return (
    // <main className="container mx-auto max-w-4xl p-4">
    <Container>
      <h1 className="mt-8 text-2xl font-bold">{metadata.title}</h1>
      <p>{metadata.description}</p>
    </Container>
  );
}
