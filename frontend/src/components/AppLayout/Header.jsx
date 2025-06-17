import {
  HiOutlineLogout,
  HiOutlineUser,
  HiOutlineUserCircle,
} from "react-icons/hi";

import { useContext } from "react";
import { Themecontext } from "../../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(Themecontext);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-200 text-black"
      }  flex px-[1.8rem] border-b border-gray-600 items-center justify-end gap-2 py-2 `}
    >
      <ul className="flex gap-3 items-center">
        <li>
          <button
            onClick={toggleTheme}
            className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </li>
        <li>
          <button className="relative group inline-block bg-none border-none p-[0.6rem] rounded-sm transition-all-0.2s cursor-pointer">
            <HiOutlineUserCircle className="w-[2rem] h-[2rem] text-blue-800 " />
            <span className="absolute hidden  group-hover:block text-sm">
              Test
            </span>
          </button>
        </li>

        <li>
          <button className="bg-none border-none p-[0.6rem] rounded-sm transition-all-0.2s hover:bg-gray-100 cursor-pointer">
            <HiOutlineLogout className="w-[2rem] h-[2rem] text-blue-800" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
