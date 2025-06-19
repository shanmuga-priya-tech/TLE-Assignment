import { useContext } from "react";
import { Themecontext } from "../../context/ThemeContext";

function UpdateUser() {
  const { theme } = useContext(Themecontext);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-slate-100 text-black"
      }  `}
    >
      {/* update form */}
      <div>
        <h1 className="text-center text-3xl font-bold mb-2 ">Update User</h1>
        <form className="flex  flex-col gap-6  rounded-lg shadow-md   p-6">
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
            <label className="font-semibold mb-2 ">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label className="font-semibold mb-2">Role:</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  className="align-middle"
                />
                Admin
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="role"
                  value="staff"
                  className="align-middle"
                />
                Staff
              </label>
            </div>
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

export default UpdateUser;
