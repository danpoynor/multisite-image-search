import Container from '../components/container'

export const metadata = {
  title: "Contact",
  description: "Contact page",
}

export default function Contact() {
  return (
    // <main className="container mx-auto max-w-4xl p-4">
    <Container>
      <h1 className="text-2xl font-bold mt-8">Contact Us</h1>
      <p>You can reach us at contact@search.photos.</p>
    </Container>
  );
}