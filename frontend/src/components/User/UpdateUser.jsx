import { useContext, useState } from "react";
import { Themecontext } from "../../context/ThemeContext";
import axios from "axios";
import toast from "react-hot-toast";

function UpdateUser({ user, onClose }) {
  const { theme } = useContext(Themecontext);
  const [userName, setUserName] = useState(user?.userName || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    // Check: at least one field must be non-empty
    if ((userName === "" || userName === user?.userName) && password === "") {
      setError("Please update at least one field before submitting.");
      return;
    }

    // Prepare the payload: set to null if field is unchanged or empty
    const payload = {
      userId: user._id,
      userName:
        userName !== user?.userName && userName !== "" ? userName : null,
      password: password !== "" ? password : null,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/updateUserInfo`,
        payload,
        { withCredentials: true }
      );

      if (res.status === 200) {
        toast.success("User Updated Successfully!");
        setUserName("");
        setPassword("");
        setError("");
        onClose();
      }
    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.data?.errorMessage || "Something went wrong."
      );
    }
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-slate-100 text-black"
      }`}
    >
      <div>
        <h1 className="text-center text-3xl font-bold mb-2">Update User</h1>
        <form
          onSubmit={handleUpdateUser}
          className="flex flex-col gap-6 rounded-lg shadow-md p-6"
        >
          <div className="text-md">
            <label className="font-semibold mb-2">UserName</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="text-md">
            <label className="font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
          </div>

          {error && (
            <p className="text-red-600 font-semibold text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="bg-blue-600 cursor-pointer text-white py-2 rounded-xl font-bold text-lg hover:bg-blue-500 transition mx-auto w-full"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
