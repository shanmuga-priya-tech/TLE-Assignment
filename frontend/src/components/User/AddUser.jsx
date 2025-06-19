import axios from "axios";
import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { toast } from "react-hot-toast";

function AddUser({ onClose, fetchUsers }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleAddUser = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/register`,
        {
          userName,
          email,
          password,
          role,
        },
        { withCredentials: true }
      );
      if (res.status === 200) {
        //console.log(res.data);
        setError(" ");
        setUserName(" ");
        setEmail(" ");
        setPassword(" ");
        setRole(" ");
        onClose();
        fetchUsers();
        toast.success("User Added Successfully!");
      }
    } catch (err) {
      //console.log(err);
      setError(err.response.data.data.errorMessage);
    }
  };

  return (
    <div>
      <div className=" fixed  bg-white text-black top-16 right-6  shadow-lg rounded-md w-72 p-4 z-50 border border-gray-300">
        <form
          onSubmit={handleAddUser}
          className="flex   flex-col gap-3 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 p-6"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-blue-700">Register</h3>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-800 cursor-pointer"
              onClick={onClose}
            >
              <HiOutlineX size={20} />
            </button>
          </div>

          <div className="text-md">
            <label className="font-semibold mb-2 ">UserName</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full border border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="text-md">
            <label className="font-semibold mb-2 ">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="text-md">
            <label className="font-semibold mb-2 ">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 text-black rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="flex gap-2 items-center">
            <label className="font-bold mb-2">Role:</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="role"
                  value="ADMIN"
                  checked={role === "ADMIN"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Admin
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="role"
                  value="STAFF"
                  checked={role === "STAFF"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Staff
              </label>
            </div>
          </div>

          {error && (
            <p className="text-red-600 font-semibold text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="bg-blue-600 cursor-pointer text-white py-2 rounded-xl font-bold text-lg hover:bg-blue-500 transition mx-auto w-full"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
