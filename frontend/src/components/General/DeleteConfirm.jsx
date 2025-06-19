function DeleteConfirm({ itemID, itemName, onSuccess, deleteFn, isLoading }) {
  return (
    <div>
      <p>Are you sure you want to delete {itemName} permanently?</p>
      <div className="flex gap-6 my-5 justify-end items-center">
        <button className="bg-blue-500 p-3 font-bold cursor-pointer rounded-lg border-none">
          Cancel
        </button>

        <button className="bg-red-500 p-3 font-bold cursor-pointer rounded-lg border-none">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirm;
