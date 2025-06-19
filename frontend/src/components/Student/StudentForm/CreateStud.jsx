import { useContext, useState } from "react";
import { Themecontext } from "../../../context/ThemeContext";
import axios from "axios";
import toast from "react-hot-toast";

function CreateStud({ fetchStudents }) {
  const { theme } = useContext(Themecontext);
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setstudentEmail] = useState("");
  const [studentPhone, setstudentPhone] = useState("");
  const [studentCFHandle, setstudentCFHandle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/students/add`,

        [{ studentName, studentEmail, studentPhone, studentCFHandle }],
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        toast.success("Student Created Successfully!");
        setStudentName(" ");
        setstudentEmail(" ");
        setstudentPhone(" ");
        setstudentCFHandle(" ");
        setError(" ");
        fetchStudents();
      }
    } catch (err) {
      //console.log(err);
      setError(err.response.data.data.errorMessage);
    }
  };

  return (
    <div
      className={` ${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-slate-100 text-black"
      }`}
    >
      <h1 className="pt-4 text-center text-xl font-bold">Register Student</h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex  flex-col gap-4 rounded-lg shadow-md   p-6"
        >
          <div className="text-md">
            <label className="font-semibold mb-2 ">Student Name</label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full border border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="text-md">
            <label className="font-semibold mb-2 ">Email Address</label>
            <input
              type="email"
              value={studentEmail}
              onChange={(e) => setstudentEmail(e.target.value)}
              className="w-full border border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="text-md">
            <label className="font-semibold mb-2 ">Phone Number</label>
            <input
              type="Number"
              value={studentPhone}
              onChange={(e) => setstudentPhone(e.target.value)}
              className="w-full border border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="text-md">
            <label className="font-semibold mb-2 ">CodeForce Handle</label>
            <input
              type="text"
              value={studentCFHandle}
              onChange={(e) => setstudentCFHandle(e.target.value)}
              className="w-full border border-gray-300  rounded px-3 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {error && (
            <p className="text-red-600 font-semibold text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="bg-blue-600 cursor-pointer text-white py-2 rounded-xl font-bold text-lg hover:bg-blue-500 transition mx-auto w-full"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateStud;
