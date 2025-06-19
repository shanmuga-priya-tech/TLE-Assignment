import { useContext } from "react";
import { Themecontext } from "../../context/ThemeContext";

function Login() {
  const { theme } = useContext(Themecontext);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-200 text-black"
      } `}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center items-center mb-6">
          <img src="/tlelogo.png" alt="logo" className="w-28 h-28 p-1" />
        </div>

        {/* Login form */}
        <div>
          <h1 className="text-center text-3xl font-bold mb-6 text-blue-600">
            Log in to your account
          </h1>
          <form className="flex flex-col gap-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 p-6">
            <div className="text-lg">
              <label className="font-bold mb-2 block">Email address:</label>
              <input
                type="email"
                className="w-full border border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="text-lg">
              <label className="font-bold mb-2 block">Password:</label>
              <input
                type="password"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
              />
            </div>

            <p className="text-red-600 font-semibold text-sm">Error</p>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-xl font-bold text-lg hover:bg-blue-500 transition mx-auto w-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
