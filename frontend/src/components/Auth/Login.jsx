import { jwtDecode } from "jwt-decode";
import axios from "axios";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Themecontext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const { theme } = useContext(Themecontext);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/login`,
        { userId, password },
        { withCredentials: true }
      );

      if (res.status === 200) {
        //console.log(res.data.data);
        const token = res.data.data.token;
        const user = jwtDecode(token);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        //console.log(user);
        setUser(user);
        navigate("/dashboard");
      } else {
        setError("Authentication failed. Please try logging in again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err?.response?.data?.errors || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-200 text-black"
      } min-h-screen flex justify-center items-center px-4`}
    >
      <div className="w-full max-w-md ">
        {/* Logo */}
        <div className="flex justify-center items-center mb-6">
          <img src="/tlelogo.png" alt="logo" className="w-28 h-28 p-1" />
        </div>

        {/* Login form */}
        <div>
          <h1 className="text-center text-3xl font-bold mb-6 text-blue-600">
            Log in to your account
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 p-6"
          >
            <div className="text-lg">
              <label className="font-bold mb-2 block">
                UserName/Email Address
              </label>
              <input
                type="email"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter Username or Email"
                required
                className="w-full border border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="text-lg">
              <label className="font-bold mb-2 block">Password</label>
              <input
                type="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border  border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
              />
            </div>

            {error && (
              <p className="text-red-600 font-semibold text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="bg-blue-600 cursor-pointer text-white py-2 rounded-xl font-bold text-lg hover:bg-blue-500 transition mx-auto w-full"
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
