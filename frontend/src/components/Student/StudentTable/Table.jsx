import { HiOutlineEye, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { format } from "date-fns";
import { Themecontext } from "../../../context/ThemeContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../General/Modal";
import UpdateStudForm from "../StudentForm/UpdateStudForm";
import DeleteConfirm from "../../General/DeleteConfirm";

function Table({ data }) {
  const { theme } = useContext(Themecontext);
  const [updateIndex, setUpdateIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);

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

      {data?.map((stud, i) => (
        <div
          key={i}
          className={`md:px-0 ${i === data.length - 1 ? "pb-4" : ""}`}
        >
          {/* Modern Mobile Card - Only visible on small screens */}
          <div className="flex flex-col gap-4 md:hidden my-5">
            <div className="bg-white rounded-2xl shadow-lg p-4 relative flex flex-col gap-3 transition-transform hover:scale-[1.02]">
              {/*  Name + last scene */}
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold capitalize text-gray-800">
                  {stud.studentName}
                </h2>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full capitalize">
                  {stud.lastUpdated !== null
                    ? format(new Date(stud.lastUpdated), "dd MMM hh:mm a")
                    : "Fetching..."}
                </span>
              </div>

              {/*  Info */}
              <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                <span className="bg-gray-100 flex items-center gap-1 px-2 py-1 rounded">
                  <span className="text-blue-700">
                    <HiOutlineMail />
                  </span>
                  : {stud.studentEmail}
                </span>
                <span className="bg-gray-100 flex items-center gap-1 px-2 py-1 rounded">
                  <span className="text-blue-700">
                    <HiOutlinePhone />{" "}
                  </span>
                  : {stud.studentPhone}
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  👨‍💻 CodeForcesHandles: {stud.studentCFHandle}
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  ⭐ CurrentRating:{" "}
                  <span
                    className={`${
                      stud.currentRating === null && "text-blue-600"
                    }`}
                  >
                    {stud.currentRating !== null
                      ? stud.currentRating
                      : "Fetching..."}
                  </span>
                </span>
                <span className={`bg-gray-100 px-2 py-1 rounded `}>
                  🌟 MaxRating:{" "}
                  <span
                    className={`${stud.maxRating === null && "text-blue-600"}`}
                  >
                    {stud.maxRating !== null ? stud.maxRating : "Fetching..."}
                  </span>
                </span>
              </div>

              {/* actions */}
              <div className="flex items-center flex-wrap justify-between">
                <Link
                  to={`/studProfile/${stud._id}`}
                  className="text-sm flex items-center gap-1 cursor-pointer text-blue-500"
                >
                  <HiOutlineEye />
                  View More
                </Link>

                <div className="flex justify-end gap-4 mt-2 text-gray-500">
                  <HiOutlinePencil
                    onClick={() => setUpdateIndex(i)}
                    className="cursor-pointer hover:text-blue-600 transition"
                  />
                  {updateIndex === i && (
                    <Modal onClose={() => setUpdateIndex(null)}>
                      <UpdateStudForm />
                    </Modal>
                  )}

                  <HiOutlineTrash
                    onClick={() => setDeleteIndex(i)}
                    className="cursor-pointer hover:text-red-600 transition"
                  />
                  {deleteIndex === i && (
                    <Modal onClose={() => setDeleteIndex(null)}>
                      <DeleteConfirm itemID={stud._id} itemName={stud.name} />
                    </Modal>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Grid Table - Only visible on md+ */}
          <div className="hidden md:grid md:grid-cols-[1.5fr_2fr_1.5fr_2fr_1fr_1fr_1.5fr_0.5fr] gap-4 items-center px-2">
            <div className="font-medium capitalize">{stud.studentName}</div>
            <div className=" truncate">{stud.studentEmail}</div>
            <div className=" pl-4">{stud.studentPhone}</div>
            <div className="text-blue-600 font-mono pl-8">
              {stud.studentCFHandle}
            </div>
            <div
              className={`text-center ${
                stud.currentRating === null && "text-blue-600 text-sm "
              }`}
            >
              {stud.currentRating !== null ? stud.currentRating : "Fetching..."}
            </div>
            <div
              className={`text-center ${
                stud.maxRating === null && "text-blue-600 text-sm "
              }`}
            >
              {stud.maxRating !== null ? stud.maxRating : "Fetching..."}
            </div>
            <div
              className={`text-center ${
                stud.maxRating === null && "text-gray-400 text-sm "
              }`}
            >
              <span className="text-xs bg-blue-200 text-blue-700 px-2 py-0.5 rounded-full">
                {stud.lastUpdated !== null
                  ? format(new Date(stud.lastUpdated), "dd MMM hh:mm a")
                  : "Fetching..."}
              </span>
            </div>

            <div className="flex justify-end gap-4 mt-2 text-gray-500">
              <Link
                to={`/studProfile/${stud._id}`}
                className="flex justify-center text-blue-500 cursor-pointer hover:text-blue-700 transition"
              >
                <HiOutlineEye size={18} />
              </Link>
              <HiOutlinePencil
                onClick={() => setUpdateIndex(i)}
                className="cursor-pointer hover:text-blue-600 transition"
              />
              {updateIndex === i && (
                <Modal onClose={() => setUpdateIndex(null)}>
                  <UpdateStudForm />
                </Modal>
              )}

              <HiOutlineTrash
                onClick={() => setDeleteIndex(i)}
                className="cursor-pointer hover:text-red-600 transition"
              />
              {deleteIndex === i && (
                <Modal onClose={() => setDeleteIndex(null)}>
                  <DeleteConfirm itemID={stud._id} itemName={stud.name} />
                </Modal>
              )}
            </div>
          </div>
          {/* Divider between rows */}
          {i !== data.length - 1 && (
            <hr className="hidden md:block border border-gray-300 my-4" />
          )}
        </div>
      ))}
    </div>
  );
}

export default Table;
