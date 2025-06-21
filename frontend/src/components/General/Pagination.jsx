import {
  HiOutlineArrowLeftCircle,
  HiOutlineArrowRightCircle,
} from "react-icons/hi2";

function Pagination({ pageNo, limitPerPage, totalCount, setPageNo }) {
  const totalPages = Math.ceil(totalCount / limitPerPage);

  const handlePrevious = () => {
    if (pageNo > 1) setPageNo(pageNo - 1);
  };

  const handleNext = () => {
    if (pageNo < totalPages) setPageNo(pageNo + 1);
  };

  const start = (pageNo - 1) * limitPerPage + 1;
  const end = Math.min(pageNo * limitPerPage, totalCount);

  return (
    <div className="flex justify-between items-center mt-6">
      <p className="text-gray-600">
        Showing <span>{start}</span> to <span>{end}</span> of{" "}
        <span>{totalCount}</span> results
      </p>
      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          disabled={pageNo === 1}
          className="p-3 flex items-center gap-2 bg-blue-600 rounded-lg cursor-pointer"
        >
          <HiOutlineArrowLeftCircle />
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={pageNo === totalPages}
          className="p-3 flex items-center gap-2 bg-blue-600 rounded-lg cursor-pointer"
        >
          Next <HiOutlineArrowRightCircle />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
