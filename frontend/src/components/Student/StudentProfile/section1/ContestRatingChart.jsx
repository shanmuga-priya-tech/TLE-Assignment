import {
  AreaChart,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomToolTip";
import ContestList from "./ContestList";
import { useEffect, useState } from "react";
import axios from "axios";

function ContestRatingChart({ studentId }) {
  const [dateRange, setDateRange] = useState(30);
  const [contestHistory, setContestHistory] = useState([]);
  const [loading, setLoading] = useState(true); // Optional loading state
  const [error, setError] = useState(null);
  console.log(studentId);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/students/ratingsGraph`,
          { studentId: studentId, dateRange: dateRange },
          { withCredentials: true }
        );
        if (res.status === 200) {
          console.log(res.data);
          setContestHistory(res.data.data);
        } else {
          setError("Failed to fetch data");
        }
      } catch (err) {
        //console.log(err);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [studentId, dateRange]);

  const contestGraphData = contestHistory.map((c) => ({
    name: c.contestName,
    date: new Date(c.ratingUpdateTimestampISO).toLocaleDateString(),
    rating: c.newRating,
    rank: c.rank,
  }));

  const isEmpty = contestGraphData.length === 0;

  return (
    <div className="rounded-xl border p-4 shadow-sm bg-white ">
      <div className="flex gap-3 justify-end ">
        <select
          value={dateRange}
          onChange={(e) => setDateRange(Number(e.target.value))}
          className="p-2 px-4 text-white cursor-pointer bg-blue-600 rounded-lg font-bold "
        >
          <option value={30}>Last 30 Days</option>
          <option value={90}>Last 90 Days</option>
          <option value={2000}>Last 365 Days</option>
        </select>
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading data...</div>
      ) : error ? (
        <div className="text-center py-10 text-red-500">{error}</div>
      ) : isEmpty ? (
        <div className="text-center py-10 text-gray-500">
          No contest data available for this student in the selected date range.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-xl text-black font-bold pb-2">Ratings Graph</h1>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={contestGraphData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorRating" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2217f4" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#2b22e3" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" />
                <YAxis domain={["auto", "auto"]} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="rating"
                  stroke="#1c10f9"
                  fillOpacity={1}
                  fill="url(#colorRating)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <ContestList studentId={studentId} dateRange={dateRange} />
        </div>
      )}
    </div>
  );
}

export default ContestRatingChart;
