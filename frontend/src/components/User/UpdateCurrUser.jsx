import { HiOutlineX } from "react-icons/hi";

function UpdateCurrUser({ onClose }) {
  return (
    <div>
      <div className=" fixed  bg-white text-black top-16 right-6  shadow-lg rounded-md w-72 p-4 z-50 border border-gray-300">
        <form className="flex   flex-col gap-3 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 p-6">
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
              className="w-full border border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="text-md">
            <label className="font-semibold mb-2 ">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="text-md">
            <label className="font-semibold mb-2 ">Current Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="text-md">
            <label className="font-semibold mb-2 ">New Password</label>
            <input
              type="password"
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
