function Pagination() {
  return (
    <div className="flex justify-between items-center mt-6">
      <p>
        Showing <span>1</span> to <span>10</span> of <span>10</span> results
      </p>
      <div className="flex gap-4">
        <button className="p-3 bg-blue-600 rounded-lg cursor-pointer">
          ⬅️ Previous
        </button>
        <button className="p-3 bg-blue-600 rounded-lg cursor-pointer">
          Next ➡️
        </button>
      </div>
    </div>
  );
}

export default Pagination;
