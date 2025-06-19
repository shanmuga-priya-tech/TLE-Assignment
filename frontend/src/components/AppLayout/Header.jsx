import axios from "axios";
import {
  HiOutlineLogout,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { useContext, useState } from "react";
import { Themecontext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import UpdateCurrUser from "../User/UpdateCurrUser";

function Header() {
  const { user, setUser } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(Themecontext);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const navigate = useNavigate();

  //logout
  const logout = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/logout`,
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        setUser(null);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-200 text-black"
      }  flex px-[1.8rem] border-b border-gray-600 items-center justify-end gap-2 py-2 `}
    >
      <ul className="flex gap-3 items-center">
        <li>
          <button
            className="bg-none border-none p-[0.6rem] rounded-sm transition-all-0.2s hover:bg-gray-100"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <HiOutlineSun className="w-[2rem] h-[2rem] text-blue-800" />
            ) : (
              <HiOutlineMoon className="w-[2rem] h-[2rem] text-blue-800" />
            )}
          </button>
        </li>

        <li>
          <button
            onClick={() => setShowUpdateForm((prev) => !prev)}
            className="relative group inline-block bg-none border-none p-[0.6rem] rounded-sm transition-all-0.2s cursor-pointer"
          >
            <HiOutlineUserCircle className="w-[2rem] h-[2rem] text-blue-800 " />
            <span className="absolute hidden  group-hover:block text-sm">
              {user?.userName}
            </span>
          </button>
        </li>
        {showUpdateForm && (
          <UpdateCurrUser
            user={user}
            onClose={() => setShowUpdateForm(false)}
          />
        )}

        <li>
          <button className="bg-none border-none p-[0.6rem] rounded-sm transition-all-0.2s hover:bg-gray-100 cursor-pointer">
            <HiOutlineLogout
              onClick={logout}
              className="w-[2rem] h-[2rem] text-blue-800"
            />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
