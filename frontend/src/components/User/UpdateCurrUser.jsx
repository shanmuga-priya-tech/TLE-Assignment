import { useContext, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { AuthContext } from "../../context/AuthContext";

function UpdateCurrUser({ onClose }) {
  const { user } = useContext(AuthContext);
  const [userName, setUserName] = useState(user?.userName || " ");
  const [userEmail, setUserEmail] = useState(user?.userEmail || " ");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <div>
      <div className=" fixed  bg-white text-black top-16 right-6  shadow-lg rounded-md w-72 p-4 z-50 border border-gray-300">
        <form
          onSubmit={handleSubmit}
          className="flex   flex-col gap-3 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 p-6"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-blue-700">Update Info</h3>
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
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full border border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="text-md">
            <label className="font-semibold mb-2 ">Current Password</label>
            <input
              type="password"
              value={currPassword}
              onChange={(e) => setCurrPassword(e.target.value)}
              className="w-full border border-gray-300 text-black rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="text-md">
            <label className="font-semibold mb-2 ">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 text-black rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
          </div>
          <p className="text-red-600 font-semibold text-sm">Error</p>
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

export default UpdateCurrUser;
