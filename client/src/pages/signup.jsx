import { Link } from "react-router-dom";

function SignUp(){
    return(
        <>
        <div className="bg-gradient-to-r from-[#c3ceff] to-[#455a8c] w-screen h-screen">
        <div className=" flex justify-center items-center h-screen">
          <div className="bg-gradient-to-l from-[#c3ceff] to-[#154445] min-h-128 w-116 rounded-md items-center shadow-lg text-xl flex flex-col gap-5">
            <form action="">
              <h2 className="pt-8 text-center font-bold text-4xl">Sign Up</h2>
              <div className="flex flex-col gap-5 pt-10 items-center">
              <div>
                  <label htmlFor="username" className="text-2xl font-semibold">
                    Username
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-white text-black p-2 px-5 w-96 focus:ring-blue-400 focus:outline-none rounded-sm focus:ring-2 focus:!bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-2xl font-semibold">
                    Email
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-white text-black p-2 px-5 w-96 focus:ring-blue-400 focus:outline-none rounded-sm focus:ring-2 focus:!bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="text-2xl font-semibold">
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-white text-black p-2 px-5 w-96 focus:ring-blue-400 focus:outline-none rounded-sm focus:ring-2 focus:!bg-white"
                  />
                </div>
                <button type="submit" className="mt-5 min-w-24 focus:outline-none">
                  Sign Up
                </button>

                <p className="-mt-1 mb-3 p-3">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
        </>
    )
}

export default SignUp