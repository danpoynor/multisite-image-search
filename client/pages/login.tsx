import Container from '../components/container'

export const metadata = {
  title: "Login",
  description: "Login page",
}

export default function Login() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mt-8">Login</h1>
      <div className="w-full flex items-center justify-center">
        <form className="w-full md:w-1/3 rounded-lg">
          <div className="px-12 pb-10">
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="
			  w-full
			  border
			  rounded
			  px-3
			  py-2
			  text-gray-700
			  focus:outline-none
			"
                />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input
                  type="password"
                  placeholder="Password"
                  className="
			  w-full
			  border
			  rounded
			  px-3
			  py-2
			  text-gray-700
			  focus:outline-none
			"
                />
              </div>
            </div>
            <button type="submit" className="font-bold w-full px-2 py-3 rounded-md">
              Login
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}