import { useContext } from "react";
import { Themecontext } from "../../../context/ThemeContext";

function UpdateStudForm() {
  const { theme } = useContext(Themecontext);
  return (
    <div
      className={` ${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-slate-100 text-black"
      }`}
    >
      <h1 className="pt-4 text-center text-xl font-bold">Update Student</h1>
      <div>
        <form className="flex  flex-col gap-4 rounded-lg shadow-md   p-6">
          <div className="text-md">
            <label className="font-semibold mb-2 ">Student Name</label>
            <input
              type="text"
              className="w-full border border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="text-md">
            <label className="font-semibold mb-2 ">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="text-md">
            <label className="font-semibold mb-2 ">Phone Number</label>
            <input
              type="Number"
              className="w-full border border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="text-md">
            <label className="font-semibold mb-2 ">CodeForce Handle</label>
            <input
              type="text"
              className="w-full border border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
              required
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

export default UpdateStudForm;
