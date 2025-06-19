import BarchartGraph from "./BarchartGraph";
import HeatMap from "./HeatMap";
import PrbStats from "./PrbStats";

function SectionTwo() {
  return (
    <div className="rounded-xl border p-4 shadow-sm bg-white ">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl md:text-2xl text-black">
          Problem Solving Stats
        </h1>
        <div className=" flex gap-3 justify-end ">
          <select className="p-2 px-4 text-white cursor-pointer bg-blue-600  rounded-lg font-bold ">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>
      </div>
      <PrbStats />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-10">
        <BarchartGraph />
        <HeatMap />
      </div>
    </div>
  );
}

export default SectionTwo;
