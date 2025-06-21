import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function BarchartGraph({ studentId, dateRange }) {
  const [ratingBucket, setRatingBucket] = useState([]);

  useEffect(() => {
    const fetchRatingBucket = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/students/barchart`,
          {
            studentId,
            dateRange,
          },
          {
            withCredentials: true,
          }
        );
        if (res.status === 200) {
          console.log(res.data.data);
          setRatingBucket(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchRatingBucket();
  }, [studentId, dateRange]);

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "8px",
          }}
        >
          <p className="text-black">
            <strong>Rating Range:</strong> {label}
          </p>
          <p className="text-black">
            <strong>Problems Solved:</strong> {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <BarChart width={400} height={200} data={ratingBucket}>
        <XAxis dataKey="ratingBucket" />
        <YAxis allowDecimals={false} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="problemsSolved" fill="#4136e4" />
      </BarChart>
      <p className="text-sm text-gray-600">Problems solved per rating bucket</p>
    </div>
  );
}

export default BarchartGraph;
