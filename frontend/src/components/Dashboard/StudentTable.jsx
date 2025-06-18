import { useContext } from "react";
import { Themecontext } from "../../context/ThemeContext";
import "react-icons/hi";
import { HiOutlineDocumentDownload, HiOutlineUserAdd } from "react-icons/hi";
import Table from "./Table";
import Pagination from "../General/Pagination";

function StudentTable() {
  const { theme } = useContext(Themecontext);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-200 text-black"
      } `}
    >
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Students List</h1>
        <div className="flex flex-wrap justify-between gap-4">
          {/*Search */}
          <div className="relative items-center min-w-[200px] border border-slate-500 rounded-lg">
            <input
              type="text"
              placeholder="Search Students..."
              className="p-3 bg-slate-200 text-black pl-10 pr-10 rounded-lg w-full"
            />
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.15 13.15z"
              />
            </svg>

            {/* Clear Icon */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            {/* Sort */}
          </div>
          <select className="min-w-[140px] p-3 rounded-lg border border-slate-400 cursor-pointer ">
            <option className="text-black">Alphabetically (A-Z)</option>
            <option className="text-black">Alphabetically (Z-A)</option>
          </select>
          <button className="py-2 px-4 flex items-center cursor-pointer rounded-lg border-none bg-slate-300 text-gray-600 text-lg">
            <span>
              <HiOutlineDocumentDownload />
            </span>{" "}
            Export
          </button>
          <button className="py-2 px-4 flex items-center cursor-pointer rounded-lg border-none bg-blue-700 text-white text-lg">
            <span>
              <HiOutlineUserAdd />
            </span>{" "}
            Add
          </button>
        </div>
      </div>

      {/* Table */}
      <Table />
      <Pagination />
    </div>
  );
}

export default StudentTable;
