import Container from '@/components/container'

export const metadata = {
  title: "Sign Up",
  description: "Sign Up page",
}

export default function SignUp() {
  return (
    <Container>
      <h1 className="mt-8 text-2xl font-bold">{metadata.title}</h1>
      <p>{metadata.description}</p>
    </Container>
  );
}
