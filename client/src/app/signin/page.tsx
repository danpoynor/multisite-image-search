import Container from '../../components/container'

export const metadata = {
  title: "Login",
  description: "Login page",
}

export default function Login() {
  return (
    <Container>
      <h1 className="mt-8 text-2xl font-bold">Login</h1>
      <div className="flex w-full items-center justify-center">
        <form className="w-full rounded-lg md:w-1/3">
          <div className="px-12 pb-10">
            <div className="mb-2 w-full">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="
			  w-full
			  rounded
			  border
			  px-3
			  py-2
			  text-gray-700
			  focus:outline-none
			"
                />
              </div>
            </div>
            <div className="mb-2 w-full">
              <div className="flex items-center">
                <input
                  type="password"
                  placeholder="Password"
                  className="
			  w-full
			  rounded
			  border
			  px-3
			  py-2
			  text-gray-700
			  focus:outline-none
			"
                />
              </div>
            </div>
            <button type="submit" className="w-full rounded-md px-2 py-3 font-bold">
              Login
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}
