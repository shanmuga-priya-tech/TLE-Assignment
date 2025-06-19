import { BarChart, Bar, XAxis, YAxis } from "recharts";

function BarchartGraph() {
  const mockProblemStats = [
    { ratingBucket: "800-999", problemsSolved: 5 },
    { ratingBucket: "1000-1199", problemsSolved: 8 },
    { ratingBucket: "1200-1399", problemsSolved: 15 },
    { ratingBucket: "1400-1599", problemsSolved: 10 },
    { ratingBucket: "1600-1799", problemsSolved: 6 },
    { ratingBucket: "1800-1999", problemsSolved: 3 },
  ];

  return (
    <div className="mt-4 flex flex-col items-center">
      <BarChart width={400} height={200} data={mockProblemStats}>
        <Bar dataKey="problemsSolved" fill="#4136e4" />
        <XAxis dataKey="ratingBucket" />
        <YAxis />
      </BarChart>
      <p className="text-sm text-gray-600">
        problems solved per rating bucket{" "}
      </p>
    </div>
  );
}

export default BarchartGraph;
