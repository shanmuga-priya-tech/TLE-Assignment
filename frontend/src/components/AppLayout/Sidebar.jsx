import { useContext } from "react";
import { Themecontext } from "../../context/ThemeContext";
import {
  HiOutlineClipboardList,
  HiOutlineDocumentDownload,
  HiOutlineTable,
  HiOutlineUser,
  HiOutlineUsers,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen, isCollapsed, setIsCollapsed }) {
  const { theme } = useContext(Themecontext);

  return (
    <div
      className={` border border-l-0 border-t-0 border-b-0 border-r-gray-600
        fixed z-40 top-0 left-0 h-full transition-all duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static
        ${isCollapsed ? "md:w-[5rem]" : "md:w-[16rem]"} w-[14rem]  py-6
        ${
          theme === "dark"
            ? "bg-slate-950 text-white"
            : "bg-slate-100 text-black"
        }
      `}
    >
      <div className="flex justify-between items-center px-[1rem] pb-2">
        {!isCollapsed && (
          <div className="flex gap-1">
            <img
              src="/tlelogo.png"
              alt="logo"
              className="w-[1.5rem] rounded-full"
            />
            <h1 className="font-bold md:text-2xl ">TLE Eliminators</h1>
          </div>
        )}

        {/* Collapse button only shows on md and up */}
        <button
          className="hidden md:block text-xl font-bold cursor-pointer"
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          {isCollapsed ? "»" : "«"}
        </button>

        {/* Close button (only mobile) */}
        <button
          className="md:hidden text-2xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          x
        </button>
      </div>

      {/* menu items */}
      <div className="mt-8">
        <ul className="flex flex-col gap-5 ">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex md:flex-row flex-col mx-6 items-center md:gap-2 md:text-[1.6rem] text-[1.3rem] font-medium md:px-2 px-2 py-2 transition-all duration-300 ${
                  isActive
                    ? "text-blue-800 bg-gray-50 rounded-sm"
                    : "hover:text-gray-800 hover:bg-gray-300 hover:rounded-sm"
                } ${
                  theme === "dark" && !isActive
                    ? "bg-slate-700 rounded-lg"
                    : "bg-slate-200 rounded-xl"
                }`
              }
            >
              <HiOutlineUsers />
              {!isCollapsed && <span className="text-xl">Students</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/downloads"
              className={({ isActive }) =>
                `flex md:flex-row flex-col mx-6 items-center md:gap-2 md:text-[1.6rem] text-[1.3rem] font-medium md:px-2 px-2 py-2 transition-all duration-300 ${
                  isActive
                    ? "text-blue-800 bg-gray-50 rounded-sm"
                    : "hover:text-gray-800 hover:bg-gray-300 hover:rounded-sm"
                } ${
                  theme === "dark" && !isActive
                    ? "bg-slate-700 rounded-lg"
                    : "bg-slate-200 rounded-xl"
                }`
              }
            >
              <HiOutlineDocumentDownload />
              {!isCollapsed && <span className="text-xl">Downloads</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `flex md:flex-row flex-col mx-6 items-center  md:gap-2 md:text-[1.6rem] text-[1.3rem] font-medium md:px-2 px-2 py-2 transition-all duration-300 ${
                  isActive
                    ? "text-blue-800 bg-gray-50 rounded-sm"
                    : "hover:text-gray-800 hover:bg-gray-300 hover:rounded-sm"
                } ${
                  theme === "dark" && !isActive
                    ? "bg-slate-700 rounded-lg"
                    : "bg-slate-200 rounded-xl"
                } `
              }
            >
              <HiOutlineUser />
              {!isCollapsed && <span className="text-xl">Users</span>}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
