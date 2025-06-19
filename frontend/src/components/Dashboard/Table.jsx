import { HiOutlineEye, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { format } from "date-fns";
import { Themecontext } from "../../context/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Table() {
  const { theme } = useContext(Themecontext);

  const mockStudents = [
    {
      _id: "1",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "9876543210",
      codeforcesHandle: "alice_cf",
      currentRating: 1650,
      maxRating: 1700,
      lastCFUpdate: "2025-06-15T02:00:00Z",
    },
    {
      _id: "2",
      name: "Bob Smith",
      email: "bob.smith@example.com",
      phone: "9123456780",
      codeforcesHandle: "bob_the_cf",
      currentRating: 1400,
      maxRating: 1550,
      lastCFUpdate: "2025-06-15T02:00:00Z",
    },
    {
      _id: "3",
      name: "Charlie Lee",
      email: "charlie.lee@example.com",
      phone: "9988776655",
      codeforcesHandle: "charlie_leet",
      currentRating: 1800,
      maxRating: 1850,
      lastCFUpdate: "2025-06-15T02:00:00Z",
    },
    {
      _id: "4",
      name: "Diana Green",
      email: "diana.green@example.com",
      phone: "9786543210",
      codeforcesHandle: "diana_pro",
      currentRating: 1200,
      maxRating: 1350,
      lastCFUpdate: "2025-06-15T02:00:00Z",
    },
    {
      _id: "5",
      name: "Ethan Wright",
      email: "ethan.wright@example.com",
      phone: "9112233445",
      codeforcesHandle: "ethan_cf_legend",
      currentRating: 1900,
      maxRating: 2000,
      lastCFUpdate: "2025-01-15T02:00:00Z",
    },
  ];

  return (
    <div
      className={`md:border md:border-gray-400 mt-6 rounded-lg ${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-slate-200 text-black"
      }`}
    >
      {/* Header row: visible on md+ only */}
      <div className="hidden md:grid md:grid-cols-[1.5fr_2fr_1.5fr_2fr_1fr_1fr_1.5fr_0.5fr] gap-3 mb-3 border-b border-gray-400 px-3  py-3 font-semibold">
        <div>Name</div>
        <div>Email</div>
        <div>Phone Number</div>
        <div>CodeForces Handle</div>
        <div>Curr Rating</div>
        <div>Max Rating</div>
        <div>Last Updated</div>
        <div></div>
        <div></div>
      </div>

      {mockStudents.map((stud, i) => (
        <div
          key={i}
          className={`md:px-0 ${i === mockStudents.length - 1 ? "pb-4" : ""}`}
        >
          {/* Modern Mobile Card - Only visible on small screens */}
          <div className="flex flex-col gap-4 md:hidden my-5">
            <div className="bg-white rounded-2xl shadow-lg p-4 relative flex flex-col gap-3 transition-transform hover:scale-[1.02]">
              {/*  Name + last scene */}
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold capitalize text-gray-800">
                  {stud.name}
                </h2>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full capitalize">
                  {format(new Date(stud.lastCFUpdate), "dd MMM hh:mm a")}
                </span>
              </div>

              {/*  Info */}
              <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                <span className="bg-gray-100 flex items-center gap-1 px-2 py-1 rounded">
                  <span className="text-blue-700">
                    <HiOutlineMail />
                  </span>
                  : {stud.email}
                </span>
                <span className="bg-gray-100 flex items-center gap-1 px-2 py-1 rounded">
                  <span className="text-blue-700">
                    <HiOutlinePhone />{" "}
                  </span>
                  : {stud.phone}
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  👨‍💻 CodeForcesHandles: {stud.codeforcesHandle}
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  ⭐ CurrentRating: {stud.currentRating}
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  🌟 MaxRating: {stud.maxRating}
                </span>
              </div>

              {/* actions */}
              <div className="flex items-center flex-wrap justify-between">
                <Link
                  to={`/studProfile/${123}`}
                  className="text-sm flex items-center gap-1 cursor-pointer text-blue-500"
                >
                  <HiOutlineEye />
                  View More
                </Link>

                <div className="flex justify-end gap-4 mt-2 text-gray-500">
                  <HiOutlinePencil className="cursor-pointer hover:text-blue-600 transition" />
                  <HiOutlineTrash className="cursor-pointer hover:text-red-600 transition" />
                </div>
              </div>
            </div>
          </div>

          {/* Grid Table - Only visible on md+ */}
          <div className="hidden md:grid md:grid-cols-[1.5fr_2fr_1.5fr_2fr_1fr_1fr_1.5fr_0.5fr] gap-4 items-center px-2">
            <div className="font-medium capitalize">{stud.name}</div>
            <div className=" truncate">{stud.email}</div>
            <div className="">{stud.phone}</div>
            <div className="text-blue-600 font-mono">
              {stud.codeforcesHandle}
            </div>
            <div className="text-center ">{stud.currentRating}</div>
            <div className="text-center ">{stud.maxRating}</div>
            <div className="text-center">
              <span className="text-xs bg-blue-200 text-blue-700 px-2 py-0.5 rounded-full">
                {format(new Date(stud.lastCFUpdate), "dd MMM hh:mm a")}
              </span>
            </div>

            <div className="flex justify-end gap-4 mt-2 text-gray-500">
              <Link
                to={`/studProfile/${123}`}
                className="flex justify-center text-blue-500 cursor-pointer hover:text-blue-700 transition"
              >
                <HiOutlineEye size={18} />
              </Link>
              <HiOutlinePencil className="cursor-pointer hover:text-blue-600 transition" />
              <HiOutlineTrash className="cursor-pointer hover:text-red-600 transition" />
            </div>
          </div>
          {/* Divider between rows */}
          {i !== mockStudents.length - 1 && (
            <hr className="hidden md:block border border-gray-300 my-4" />
          )}
        </div>
      ))}
    </div>
  );
}

export default Table;
