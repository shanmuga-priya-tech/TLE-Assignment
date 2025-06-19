import { useContext } from "react";
import { Themecontext } from "../../../../context/ThemeContext";

function ContestList({ contests }) {
  const { theme } = useContext(Themecontext);

  return (
    <div className="pt-10 md:pt-0">
      <h1 className="text-xl font-bold text-black">Contest List</h1>
      <div
        className={`border border-gray-400 mt-2 rounded-lg ${
          theme === "dark"
            ? "bg-slate-800 text-white"
            : "bg-slate-200 text-black"
        }`}
      >
        <div className="grid  grid-cols-[2fr_1fr_1fr_1fr] gap-3 mb-3 border-b border-gray-400 px-3 py-3 font-semibold">
          <div>Contest Name</div>
          <div>Rating</div>
          <div>Rank</div>
          <div className="text-sm">Unsolved Problems</div>
        </div>

        {/* Scrollable list */}
        <div className="max-h-[400px] overflow-y-auto">
          {contests.map((c, i) => (
            <div key={c.name}>
              <div className="grid  grid-cols-[2fr_1fr_1fr_1fr] gap-4 items-center px-2 py-2">
                <div>{c.name}</div>
                <div>{c.rating}</div>
                <div>{c.rank}</div>
                <div>{c.unsolvedProblems}</div>
              </div>
              {i !== contests.length - 1 && (
                <hr className="border border-gray-300 my-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContestList;
