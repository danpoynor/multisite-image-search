import Container from '@/components/container'

export const metadata = {
  title: "User Account",
  description: "Manage your user account here."
}

export default function Account() {
  return (
    <Container>
      <h1 className="mt-8 text-2xl font-bold">{metadata.title}</h1>
      <p>{metadata.description}</p>
    </Container>
  );
}
