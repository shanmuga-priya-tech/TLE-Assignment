import { useContext, useEffect, useState } from "react";
import { Themecontext } from "../../../../context/ThemeContext";
import axios from "axios";
import Pagination from "../../../General/Pagination";

function ContestList({ studentId, dateRange }) {
  const { theme } = useContext(Themecontext);

  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const limitPerPage = 5;
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      console.log(studentId, dateRange);
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/students/contestsList`,
          { studentId, dateRange, pagination: { pageNo, limitPerPage } },
          { withCredentials: true }
        );
        if (res.status === 200) {
          console.log(res.data);
          setContests(res.data.data.contestsList || []);
          setTotalCount(res.data.data.totalCount || 0);
        } else {
          setError("Failed to fetch contest data.");
        }
      } catch (err) {
        console.log(err);
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [studentId, dateRange, pageNo]);

  const handlePageChange = (newPage) => {
    setPageNo(newPage);
  };

  const totalPages = Math.ceil(totalCount / limitPerPage);

  return (
    <div className="pt-10 md:pt-0">
      <h1 className="text-xl font-bold text-black">Contest List</h1>
      <div
        className={`border border-gray-400 mt-2 rounded-lg ${
          theme === "dark"
            ? "bg-slate-800 text-white"
            : "bg-slate-200 text-black"
        }`}
      >
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-3 mb-3 border-b border-gray-400 px-3 py-3 font-semibold">
          <div>Contest Name</div>
          <div>New Rating</div>
          <div>Rank</div>
          <div className="text-sm">Unsolved Problems</div>
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {loading ? (
            <div className="text-center py-5 text-gray-500">Loading...</div>
          ) : error ? (
            <div className="text-center py-5 text-red-500">{error}</div>
          ) : contests.length === 0 ? (
            <div className="text-center py-5 text-gray-500">
              No contests available.
            </div>
          ) : (
            contests.map((c, i) => (
              <div key={c._id}>
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 items-center px-2 py-2">
                  <div className="text-sm">{c.contestName}</div>
                  <div>{c.newRating}</div>
                  <div>{c.rank}</div>
                  <div>{c.unsolvedProblemsCount}</div>
                </div>
                {i !== contests.length - 1 && (
                  <hr className="border border-gray-300 my-2" />
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <Pagination
        totalCount={totalCount}
        limitPerPage={limitPerPage}
        pageNo={pageNo}
        setPageNo={setPageNo}
      />
    </div>
  );
}

export default ContestList;
