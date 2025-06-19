import { useContext } from "react";
import { Themecontext } from "../../context/ThemeContext";

import { HiOutlineDocumentDownload } from "react-icons/hi";
import Pagination from "../General/Pagination";

function Downloads() {
  const { theme } = useContext(Themecontext);

  const downloadHistory = [
    {
      dateTime: "2025-06-18 09:15",
      downloadedBy: "Admin John",
      fileName: "student_list_20250618.csv",
    },
    {
      dateTime: "2025-06-18 11:40",
      downloadedBy: "Admin Sarah",
      fileName: "student_list_20250618.csv",
    },
    {
      dateTime: "2025-06-17 14:25",
      downloadedBy: "Admin Mike",
      fileName: "student_list_20250617.csv",
    },
    {
      dateTime: "2025-06-16 16:05",
      downloadedBy: "Admin John",
      fileName: "student_list_20250616.csv",
    },
    {
      dateTime: "2025-06-15 10:50",
      downloadedBy: "Admin Lisa",
      fileName: "student_list_20250615.csv",
    },
  ];

  return (
    <div
      className={` ${
        theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-200 text-black"
      }`}
    >
      <div>
        <h1 className="text-2xl font-bold pb-2">Download History:</h1>
        <div
          className={`border border-gray-400 mt-2 rounded-lg ${
            theme === "dark"
              ? "bg-slate-900 text-white"
              : "bg-slate-200 text-black"
          }`}
        >
          <div className="grid  grid-cols-[2fr_2fr_2fr_2fr] gap-3 mb-3 border-b border-gray-400 px-3 py-3 font-semibold">
            <div>Date/Time</div>
            <div>Downloaded By</div>
            <div>FileName</div>
            <div>Download</div>
          </div>

          <div>
            {downloadHistory.map((download, i) => (
              <div key={i}>
                <div className="grid  grid-cols-[2fr_2fr_2fr_2fr] text-sm  gap-4 items-center px-2 py-2">
                  <div>{download.dateTime}</div>
                  <div className="capitalize">{download.downloadedBy}</div>
                  <div>{download.fileName}</div>
                  <div>
                    <span className="text-3xl  text-blue-700 cursor-pointer">
                      <HiOutlineDocumentDownload />
                    </span>
                  </div>
                </div>
                {i !== downloadHistory.length - 1 && (
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

export default Downloads;
