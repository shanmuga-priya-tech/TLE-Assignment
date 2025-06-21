import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import axios from "axios";

function HeatMap({ studentId, dateRange }) {
  const [heatmapData, setHeatmapData] = useState([]);
  const [totalSubmissions, setTotalSubmissions] = useState(0);
  const [displayStartDate, setDisplayStartDate] = useState(new Date());
  const [displayEndDate, setDisplayEndDate] = useState(new Date());

  useEffect(() => {
    const fetchHeatMapData = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/students/heatMap`,
          { studentId, dateRange },
          { withCredentials: true }
        );

        if (res.status === 200) {
          const data = res.data.data;
          setHeatmapData(data);

          // Calculate total submissions
          const total = data.reduce((sum, day) => sum + day.count, 0);
          setTotalSubmissions(total);

          // Set display range
          const now = new Date();
          const pastDate = new Date();
          pastDate.setDate(now.getDate() - dateRange);
          setDisplayStartDate(pastDate);
          setDisplayEndDate(now);
        }
      } catch (error) {
        console.error("Error fetching heatmap data:", error);
      }
    };

    fetchHeatMapData();
  }, [studentId, dateRange]);

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <div className="inline-block rounded min-w-[900px] max-w-[900px]">
          <CalendarHeatmap
            startDate={displayStartDate}
            endDate={displayEndDate}
            values={heatmapData}
            showWeekdayLabels
            showMonthLabels={true}
            classForValue={(value) => {
              if (!value || value.count === null) return "fill-slate-200";
              if (value.count >= 4) return "fill-blue-700";
              if (value.count >= 3) return "fill-blue-500";
              if (value.count >= 2) return "fill-blue-300";
              if (value.count >= 1) return "fill-blue-200";
              return "fill-slate-200";
            }}
            transformDayElement={
              (rect, value, index) => React.cloneElement(rect, { rx: 2, ry: 2 }) //rounded corner
            }
          />
        </div>
      </div>

      <div className="flex justify-between text-black mt-4">
        <div className="text-sm font-medium">
          Total Submissions in Last {dateRange === 365 ? 90 : dateRange} Days:{" "}
          {totalSubmissions}
        </div>

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
