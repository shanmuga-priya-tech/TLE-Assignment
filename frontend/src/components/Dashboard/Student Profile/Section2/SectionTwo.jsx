import BarchartGraph from "./BarchartGraph";
import HeatMap from "./HeatMap";
import PrbStats from "./PrbStats";

function SectionTwo() {
  return (
    <div className="rounded-xl border p-4 shadow-sm bg-white ">
      <div className=" flex gap-3 justify-end ">
        <button className="p-2 px-4  bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
          Last 7 Days
        </button>{" "}
        <button className="p-2 px-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
          Last 30 Days
        </button>
        <button className="p-2 px-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
          Last 90 Days
        </button>
      </div>
      <PrbStats />
      <div className="grid md:grid-cols-2 gap-10 items-start mt-10">
        <BarchartGraph />
        <HeatMap />
      </div>
    </div>
  );
}

export default SectionTwo;
