import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

function HeatMap() {
  const startDate = new Date("2024-01-01"); // Start of this year
  const endDate = new Date("2024-12-31"); // End of this year

  // Generate mock data for the full year
  const generateMockHeatmapData = () => {
    const data = [];
    for (
      let d = new Date(startDate);
      d <= endDate;
      d.setDate(d.getDate() + 1)
    ) {
      data.push({
        date: d.toISOString().split("T")[0],
        count: Math.floor(Math.random() * 5), // Random counts 0-4
      });
    }
    return data;
  };

  const mockHeatmapData = generateMockHeatmapData();

  // Calculate total submissions
  const totalSubmissions = mockHeatmapData.reduce(
    (sum, day) => sum + day.count,
    0
  );

  return (
    <div className="p-4">
      {/* Heatmap with horizontal scroll for full year but showing only 6 months width */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-[900px] max-w-[900px]">
          {" "}
          {/* shows approx 6 months */}
          <CalendarHeatmap
            startDate={startDate}
            endDate={endDate}
            values={mockHeatmapData}
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
      <div className="flex justify-between text-balck">
        <div className="mt-4 text-center text-sm font-medium text-black">
          Total Submissions This Year: {totalSubmissions}
        </div>

        {/* similar to GitHub */}
        <div className="mt-2 flex justify-center items-center space-x-2 text-sm text-black">
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
