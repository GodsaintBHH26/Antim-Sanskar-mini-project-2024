function Login() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#c3ceff] to-[#455a8c] w-screen h-screen">
        <div className=" flex justify-center items-center h-screen">
          <div className="bg-gradient-to-l from-[#c3ceff] to-[#154445] h-128 w-116 rounded-md items-center shadow-lg text-xl flex flex-col gap-5">
            <form action="">
              <h2 className="pt-8 text-center font-bold text-2xl">Login</h2>
              <div className="flex flex-col gap-5 pt-10">
                <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" id="email" />
                </div>

                <div>
                  <label htmlFor="password">Password:</label>
                  <input type="password" name="password" id="password" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
