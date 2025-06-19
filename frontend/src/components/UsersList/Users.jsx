import { useContext } from "react";
import { Themecontext } from "../../context/ThemeContext";
import {
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineUserAdd,
} from "react-icons/hi";
import Pagination from "../General/Pagination";

function Users() {
  const { theme } = useContext(Themecontext);
  const mockuser = [
    {
      userName: "admin user",
      email: "admin@gmail.com",
    },
    {
      userName: "adminTle",
      email: "admintle@gmail.com",
    },
    {
      userName: "Tle",
      email: "tle@gmail.com",
    },
  ];
  return (
    <div
      className={` ${
        theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-200 text-black"
      }`}
    >
      <div>
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-2xl font-bold">Users List:</h1>
          <button className="py-2 px-4 flex items-center cursor-pointer rounded-lg border-none bg-blue-700 text-white text-lg">
            <span>
              <HiOutlineUserAdd />
            </span>{" "}
            Add
          </button>
        </div>
        <div
          className={`border border-gray-400 mt-2 rounded-lg ${
            theme === "dark"
              ? "bg-slate-900 text-white"
              : "bg-slate-200 text-black"
          }`}
        >
          <div className="grid  grid-cols-[2fr_2fr_1fr] gap-3 mb-3 border-b border-gray-400 px-3 py-3 font-semibold">
            <div>UserName</div>
            <div>Email</div>
            <div>Action</div>
          </div>

          <div>
            {mockuser.map((user, i) => (
              <div key={i}>
                <div className="grid  grid-cols-[2fr_2fr_1fr] gap-4 items-center px-2 py-2">
                  <div className="capitalize">{user.userName}</div>
                  <div>{user.email}</div>
                  <div className="flex  gap-4 mt-2 text-xl">
                    <HiOutlinePencil className="cursor-pointer hover:text-blue-600 transition" />
                    <HiOutlineTrash className="cursor-pointer hover:text-red-600 transition" />
                  </div>
                </div>
                {i !== mockuser.length - 1 && (
                  <hr className="border border-gray-300 my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
}

export default Users;
