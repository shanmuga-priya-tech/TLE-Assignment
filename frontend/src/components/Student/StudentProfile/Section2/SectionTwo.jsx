import { useState } from "react";
import BarchartGraph from "./BarchartGraph";
import HeatMap from "./HeatMap";
import PrbStats from "./PrbStats";

function SectionTwo({ studentId }) {
  const [dateRange, setDateRange] = useState(7);
  const [statsData, setStatsData] = useState(null);

  const isDataEmpty = !statsData || statsData.totalProblemSolved === 0;

  return (
    <div className="rounded-xl border p-4 shadow-sm bg-white">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl md:text-2xl text-black">
          Problem Solving Stats
        </h1>
        <div className="flex gap-3 justify-end">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(Number(e.target.value))}
            className="p-2 px-4 text-white cursor-pointer bg-blue-600 rounded-lg font-bold"
          >
            <option value={7}>Last 7 Days</option>
            <option value={30}>Last 30 Days</option>
            <option value={365}>Last 90 Days</option>
          </select>
        </div>
      </div>

      <PrbStats
        studentId={studentId}
        dateRange={dateRange}
        onDataFetched={setStatsData}
      />

      {!isDataEmpty ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-10">
          <BarchartGraph studentId={studentId} dateRange={dateRange} />
          <HeatMap studentId={studentId} dateRange={dateRange} />
        </div>
      ) : (
        <div className="text-center mt-10 text-gray-500 font-semibold">
          No problem solving data available for this period.
        </div>
      )}
    </div>
  );
}

export default SectionTwo;
