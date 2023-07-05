import Container from '@/components/container'

export const metadata = {
  title: "User Profile",
  description: "Manage your user profile here."
}

export default function Profile() {
  return (
    <Container>
      <h1 className="mt-8 text-2xl font-bold">{metadata.title}</h1>
      <p>{metadata.description}</p>
    </Container>
  );
}
