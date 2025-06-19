import "react-icons/hi2";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowLeftCircle,
  HiOutlineArrowRight,
  HiOutlineArrowRightCircle,
} from "react-icons/hi2";

function Pagination() {
  return (
    <div className="flex justify-between items-center mt-6">
      <p>
        Showing <span>1</span> to <span>10</span> of <span>10</span> results
      </p>
      <div className="flex gap-4">
        <button className="p-3 flex items-center gap-2 bg-blue-600 rounded-lg cursor-pointer">
          <HiOutlineArrowLeftCircle />
          Previous
        </button>
        <button className="p-3 flex items-center gap-2 bg-blue-600 rounded-lg cursor-pointer">
          Next <HiOutlineArrowRightCircle />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
