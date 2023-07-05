export default function Login() {
  return (
    <main className="container mx-auto max-w-4xl p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}