function PrbStats() {
  const mockProblemSummary = {
    totalSolved: 45,
    mostDifficultProblem: {
      name: "Div2 C Problem",
      rating: 1800,
    },
    averageProblemRating: 1350,
    averageProblemsPerDay: 2,
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full py-4 mt-4">
      <div className="rounded-xl border p-4 shadow-md bg-slate-100">
        <p className="text-sm text-gray-500">Total Solved:</p>
        <p className="text-2xl font-bold text-black">
          {mockProblemSummary.totalSolved}
        </p>
      </div>

      <div className="rounded-xl border p-4 shadow-md bg-slate-100">
        <p className="text-sm text-gray-500">Most Difficult Problem:</p>
        <p className="text-xl font-bold text-black">
          {`${mockProblemSummary.mostDifficultProblem.name}(${mockProblemSummary.mostDifficultProblem.rating})`}
        </p>
      </div>

      <div className="rounded-xl border p-4 shadow-md bg-slate-100">
        <p className="text-sm text-gray-500">Average Rating:</p>
        <p className="text-2xl font-bold text-black">
          {mockProblemSummary.averageProblemRating}
        </p>
      </div>

      <div className="rounded-xl border p-4 shadow-md bg-slate-100">
        <p className="text-sm text-gray-500">Average Problem Per Day:</p>
        <p className=" flex items-center gap-2 font-bold text-2xl text-black">
          {mockProblemSummary.averageProblemsPerDay}
        </p>
      </div>
    </div>
  );
}

export default PrbStats;
