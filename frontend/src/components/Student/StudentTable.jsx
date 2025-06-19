import { useContext, useState, useEffect } from "react";
import { Themecontext } from "../../context/ThemeContext";
import { HiOutlineDocumentDownload, HiOutlineUserAdd } from "react-icons/hi";
import Table from "./StudentTable/Table";
import Pagination from "../General/Pagination";
import CreateStud from "./StudentForm/CreateStud";
import Modal from "../General/Modal";
import axios from "axios";

function StudentTable() {
  const { theme } = useContext(Themecontext);
  const [showAddForm, setShowAddForm] = useState(false);

  const [studentsData, setStudentsData] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  // Backend-required states
  const [pageNo, setPageNo] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [sortField, setSortField] = useState("studentName");
  const [sortDirection, setSortDirection] = useState(1); // 1 = ASC, -1 = DESC

  useEffect(() => {
    fetchStudents();
  }, [pageNo, limitPerPage, searchText, sortField, sortDirection]);

  const fetchStudents = async () => {
    try {
      const payload = {
        pagination: {
          pageNo,
          limitPerPage,
        },
        filters: {
          searchText: searchText || null, // allow null if empty
        },
        sort: {
          sortField,
          sortDirection,
        },
      };

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/students/list`,
        payload,
        { withCredentials: true }
      );

      if (res.status === 200) {
        setStudentsData(res.data.data.students);
        setTotalUsers(res.data.data.totalCount);
      }
      //console.log(res.data.data.totalCount);
    } catch (error) {
      console.error("Failed to fetch students:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setPageNo(1); // reset to first page when searching
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "az") {
      setSortDirection(1);
    } else if (value === "za") {
      setSortDirection(-1);
    }
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-200 text-black"
      } p-4`}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Students List</h1>

        <div className="relative overflow-x-auto md:max-w-[65%]">
          <div className="flex flex-nowrap gap-4 items-center min-w-max">
            {/* Search */}
            <div className="relative min-w-[200px]">
              <input
                type="text"
                value={searchText}
                onChange={handleSearchChange}
                placeholder="Search Students..."
                className="p-3 bg-slate-200 text-black pl-10 pr-10 rounded-lg w-full"
              />
              {/* Icons */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.15 13.15z"
                />
              </svg>
              {searchText && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  onClick={() => setSearchText("")}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>

            {/* Sort */}
            <select
              className="min-w-[140px] p-3 rounded-lg border border-slate-400 cursor-pointer bg-white text-black"
              onChange={handleSortChange}
            >
              <option value="az">Alphabetically (A-Z)</option>
              <option value="za">Alphabetically (Z-A)</option>
            </select>

            {/* Export */}
            <button className="py-2 px-4 flex items-center gap-2 rounded-lg bg-slate-300 text-gray-600 text-lg">
              <HiOutlineDocumentDownload />
              Export
            </button>

            {/* Add */}
            <button
              onClick={() => setShowAddForm(true)}
              className="py-2 px-4 flex items-center gap-2 rounded-lg bg-blue-700 text-white text-lg"
            >
              <HiOutlineUserAdd />
              Add
            </button>
            {showAddForm && (
              <Modal onClose={() => setShowAddForm(false)}>
                <CreateStud
                  fetchStudents={() => fetchStudents(pageNo, limitPerPage)}
                />
              </Modal>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <Table data={studentsData} />
      <Pagination
        pageNo={pageNo}
        limitPerPage={limitPerPage}
        totalCount={totalUsers}
        setPageNo={setPageNo}
      />
    </div>
  );
}

export default StudentTable;
