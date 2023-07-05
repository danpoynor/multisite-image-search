import Container from '@/components/container'

export const metadata = {
  title: "User Settings",
  description: "Manage your user settings here."
}

export default function Settings() {
  return (
    <Container>
      <h1 className="mt-8 text-2xl font-bold">{metadata.title}</h1>
      <p>{metadata.description}</p>
    </Container>
  );
}
