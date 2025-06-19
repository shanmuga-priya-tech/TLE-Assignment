import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

// Mock Codeforces-like API response
const mockCFData = {
  status: "OK",
  result: [
    {
      id: 1001,
      creationTimeSeconds: 1735689600, // 2025-01-01
      verdict: "OK",
    },
    {
      id: 1002,
      creationTimeSeconds: 1735862400, // 2025-01-03
      verdict: "OK",
    },
    {
      id: 1003,
      creationTimeSeconds: 1737417600, // 2025-01-21
      verdict: "OK",
    },
    {
      id: 1004,
      creationTimeSeconds: 1740268800, // 2025-02-22
      verdict: "TIME_LIMIT_EXCEEDED",
    },
    {
      id: 1005,
      creationTimeSeconds: 1741632000, // 2025-03-10
      verdict: "OK",
    },
    {
      id: 1006,
      creationTimeSeconds: 1744483200, // 2025-04-18
      verdict: "OK",
    },
    {
      id: 1007,
      creationTimeSeconds: 1747075200, // 2025-05-13
      verdict: "OK",
    },
    {
      id: 1008,
      creationTimeSeconds: 1747334400, // 2025-05-16
      verdict: "WRONG_ANSWER",
    },
    {
      id: 1009,
      creationTimeSeconds: 1750012800, // 2025-06-15
      verdict: "OK",
    },
    {
      id: 1010,
      creationTimeSeconds: 1750099200, // 2025-06-16
      verdict: "OK",
    },
    {
      id: 1011,
      creationTimeSeconds: 1750185600, // 2025-06-17
      verdict: "OK",
    },
    {
      id: 1012,
      creationTimeSeconds: 1750272000, // 2025-06-18
      verdict: "WRONG_ANSWER",
    },
    {
      id: 1013,
      creationTimeSeconds: 1750272000, // 2025-06-18
      verdict: "WRONG_ANSWER",
    },
    {
      id: 1014,
      creationTimeSeconds: 1750272000, // 2025-06-18
      verdict: "WRONG_ANSWER",
    },
    {
      id: 1015,
      creationTimeSeconds: 1750272000, // 2025-06-18
      verdict: "WRONG_ANSWER",
    },
    {
      id: 1016,
      creationTimeSeconds: 1750272000, // 2025-06-18
      verdict: "WRONG_ANSWER",
    },
    {
      id: 1017,
      creationTimeSeconds: 1750272000, // 2025-06-18
      verdict: "WRONG_ANSWER",
    },
    {
      id: 1018,
      creationTimeSeconds: 1750272000, // 2025-06-18
      verdict: "WRONG_ANSWER",
    },
  ],
};

function HeatMap() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [heatmapData, setHeatmapData] = useState([]);
  const [totalSubmissions, setTotalSubmissions] = useState(0);

  const displayStartDate = new Date(`${year}-01-01`);
  const displayEndDate = new Date(`${year}-12-31`);

  // Simulate fetching and processing mock Codeforces data
  useEffect(() => {
    const fetchMockCFData = () => {
      const submissionsPerDay = {};

      mockCFData.result.forEach((submission) => {
        const date = new Date(submission.creationTimeSeconds * 1000)
          .toISOString()
          .split("T")[0];
        const submissionYear = new Date(date).getFullYear();

        if (submissionYear === year) {
          submissionsPerDay[date] = (submissionsPerDay[date] || 0) + 1;
        }
      });

      const fullYearData = [];
      let total = 0;

      for (
        let d = new Date(displayStartDate);
        d <= displayEndDate;
        d.setDate(d.getDate() + 1)
      ) {
        const dateStr = d.toISOString().split("T")[0];
        const count = submissionsPerDay[dateStr] || 0;
        total += count;
        fullYearData.push({
          date: dateStr,
          count: count,
        });
      }

      setHeatmapData(fullYearData);
      setTotalSubmissions(total);
    };

    fetchMockCFData();
  }, [year]);

  const years = [2023, 2024, 2025]; // Example years

  return (
    <div className="p-4">
      {/* Year Selector */}
      <div className="mb-4 text-black">
        <label className="mr-2 font-medium">Select Year:</label>
        <select
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
          className="border px-2 py-1 rounded cursor-pointer"
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {/* Heatmap */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-[900px] max-w-[900px]">
          <CalendarHeatmap
            startDate={displayStartDate}
            endDate={displayEndDate}
            values={heatmapData}
            showWeekdayLabels
            showMonthLabels={true}
            classForValue={(value) => {
              if (!value || value.count === null) return "fill-transparent";
              if (value.count >= 4) return "fill-blue-700";
              if (value.count >= 3) return "fill-blue-500";
              if (value.count >= 2) return "fill-blue-300";
              if (value.count >= 1) return "fill-blue-200";
              return "fill-slate-200";
            }}
          />
        </div>
      </div>

      {/* Total Submissions */}
      <div className="flex justify-between text-black mt-4">
        <div className="text-sm font-medium">
          Total Submissions in {year}: {totalSubmissions}
        </div>

        {/* color scale */}
        <div className="flex items-center space-x-2 text-sm">
          <span>Less</span>
          <div className="w-4 h-4 rounded bg-slate-200"></div>
          <div className="w-4 h-4 rounded bg-blue-200"></div>
          <div className="w-4 h-4 rounded bg-blue-300"></div>
          <div className="w-4 h-4 rounded bg-blue-500"></div>
          <div className="w-4 h-4 rounded bg-blue-700"></div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

export default HeatMap;
