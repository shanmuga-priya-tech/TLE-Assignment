import { useEffect, useState } from "react";
import axios from "axios";

function PrbStats({ studentId, dateRange, onDataFetched }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/students/stats`,
          { studentId, dateRange },
          { withCredentials: true }
        );
        if (res.status === 200) {
          const data = res.data.data;
          setStats(data);
          onDataFetched(data); // notify SectionTwo
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
        setStats(null);
        onDataFetched(null); // pass null on error
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [studentId, dateRange]);

  if (loading) return <p>Loading Problem Stats...</p>;
  if (!stats) return <p>Failed to load Problem Stats.</p>;

  const totalSolved = stats.totalProblemSolved || 0;
  const mostDifficult = stats.mostDifficultSolvedProblem;
  const avgRating = stats.avgRating;
  const avgPerDay = stats.averageProblemPerDay || 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full py-4 mt-4">
      <div className="rounded-xl border p-4 shadow-md bg-slate-100">
        <p className="text-sm text-gray-500">Total Solved:</p>
        <p className="text-2xl font-bold text-black">{totalSolved}</p>
      </div>

      <div className="rounded-xl border p-4 shadow-md bg-slate-100">
        <p className="text-sm text-gray-500">Most Difficult Problem:</p>
        <p className="text-md font-bold text-black">
          {mostDifficult
            ? `${mostDifficult.name} (${mostDifficult.rating})`
            : "N/A"}
        </p>
      </div>

      <div className="rounded-xl border p-4 shadow-md bg-slate-100">
        <p className="text-sm text-gray-500">Average Rating:</p>
        <p className="text-2xl font-bold text-black">
          {avgRating ? avgRating : "N/A"}
        </p>
      </div>

      <div className="rounded-xl border p-4 shadow-md bg-slate-100">
        <p className="text-sm text-gray-500">Average Problem Per Day:</p>
        <p className="text-2xl font-bold text-black">{avgPerDay}</p>
      </div>
    </div>
  );
}

export default PrbStats;
