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

function ContestRatingChart() {
  const mockContestHistory = [
    {
      contestId: 101,
      contestName: "Codeforces Round #900",
      rank: 120,
      ratingChange: 50,
      newRating: 1650,
      unsolvedProblems: 1,
      contestDate: "2025-03-01T00:00:00Z",
    },
    {
      contestId: 102,
      contestName: "Codeforces Round #905",
      rank: 80,
      ratingChange: 30,
      newRating: 1680,
      unsolvedProblems: 0,
      contestDate: "2025-04-10T00:00:00Z",
    },
    {
      contestId: 103,
      contestName: "Codeforces Round #910",
      rank: 200,
      ratingChange: -20,
      newRating: 1660,
      unsolvedProblems: 3,
      contestDate: "2025-05-15T00:00:00Z",
    },
    {
      contestId: 104,
      contestName: "Codeforces Round #915",
      rank: 50,
      ratingChange: 40,
      newRating: 1700,
      unsolvedProblems: 0,
      contestDate: "2025-06-10T00:00:00Z",
    },
  ];

  const contestGraphData = mockContestHistory.map((c) => ({
    name: c.contestName,
    date: new Date(c.contestDate).toLocaleDateString(),
    rating: c.newRating,
    rank: c.rank,
    unsolvedProblems: c.unsolvedProblems,
  }));

  return (
    <div className="grid md:grid-cols-2  gap-10 items-center">
      <ResponsiveContainer width="100%" height={300}>
        <h1 className="text-2xl font-bold py-2">Ratings Graph:</h1>
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
      <ContestList contests={contestGraphData} />
    </div>
  );
}

export default ContestRatingChart;
