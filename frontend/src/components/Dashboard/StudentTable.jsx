import { useContext } from "react";
import { Themecontext } from "../../context/ThemeContext";

function StudentTable() {
  const { theme } = useContext(Themecontext);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-200 text-black"
      } `}
    >
      table
    </div>
  );
}

export default StudentTable;
