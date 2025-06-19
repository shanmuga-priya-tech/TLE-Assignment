import { useContext, useEffect, useState } from "react";
import { Themecontext } from "../../context/ThemeContext";
import {
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineUserAdd,
} from "react-icons/hi";
import Pagination from "../General/Pagination";
import AddUser from "./AddUser";
import Modal from "../General/Modal";
import UpdateUser from "./UpdateUser";
import DeleteConfirm from "../General/DeleteConfirm";
import axios from "axios";

function UsersList() {
  const { theme } = useContext(Themecontext);
  const [users, setUsers] = useState([]);
  const [adduser, setAdduser] = useState(false); //toggle form
  const [editUserIndex, setEditUserIndex] = useState(null);
  const [delUserIndex, setDelUserIndex] = useState(null);

  //pagination
  const [totalUsers, setTotalUsers] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  const [limitPerPage, setLimitPerPage] = useState(10);

  //fetchusers
  const fetchUsers = async (
    pageNo,
    limitPerPage,
    searchText = null,
    sortField = "createdAt",
    sortDirection = -1
  ) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/getUsers`,
        {
          pagination: {
            pageNo,
            limitPerPage,
          },
          filters: {
            searchText: searchText,
          },
          sort: {
            sortField,
            sortDirection,
          },
        },
        { withCredentials: true }
      );

      if (res.status === 200) {
        //console.log( res.data.data);
        setUsers(res.data.data.users);
        setTotalUsers(res.data.data.totalCount);
      }
    } catch (err) {
      console.error("Error fetching users:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchUsers(pageNo, limitPerPage);
  }, [pageNo, limitPerPage]);

  return (
    <div
      className={` ${
        theme === "dark" ? "bg-slate-950 text-white" : "bg-slate-200 text-black"
      }`}
    >
      <div>
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-2xl font-bold">Users List:</h1>
          <button
            onClick={() => setAdduser((prev) => !prev)}
            className="py-2 px-4 flex items-center cursor-pointer rounded-lg border-none bg-blue-700 text-white text-lg"
          >
            <span>
              <HiOutlineUserAdd />
            </span>{" "}
            Add
          </button>
        </div>

        {adduser && (
          <AddUser
            onClose={() => setAdduser(false)}
            fetchUsers={() => fetchUsers(pageNo, limitPerPage)}
          />
        )}

        <div
          className={`border border-gray-400 mt-2 rounded-lg ${
            theme === "dark"
              ? "bg-slate-900 text-white"
              : "bg-slate-200 text-black"
          }`}
        >
          <div className="grid  grid-cols-[2fr_2fr_1fr] gap-3 mb-3 border-b border-gray-400 px-3 py-3 font-semibold">
            <div>UserName</div>
            <div>Email</div>
            <div>Action</div>
          </div>

          <div>
            {users.map((user, i) => (
              <div key={i}>
                <div className="grid grid-cols-[2fr_2fr_1fr] gap-4 items-center px-2 py-2">
                  <div className="capitalize">{user.userName}</div>
                  <div>{user.email}</div>
                  <div className="flex gap-4 mt-2 text-xl">
                    <HiOutlinePencil
                      onClick={() => setEditUserIndex(i)}
                      className="cursor-pointer hover:text-blue-600 transition"
                    />
                    {editUserIndex === i && (
                      <Modal onClose={() => setEditUserIndex(null)}>
                        <UpdateUser
                          user={user}
                          onClose={() => setEditUserIndex(null)}
                        />
                      </Modal>
                    )}

                    <HiOutlineTrash
                      onClick={() => setDelUserIndex(i)}
                      className="cursor-pointer hover:text-red-600 transition"
                    />
                    {delUserIndex === i && (
                      <Modal onClose={() => setDelUserIndex(null)}>
                        <DeleteConfirm itemName={user.userName} />
                      </Modal>
                    )}
                  </div>
                </div>
                {i !== users.length - 1 && (
                  <hr className="border border-gray-300 my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pagination
        pageNo={pageNo}
        limitPerPage={limitPerPage}
        totalCount={totalUsers}
        setPageNo={setPageNo}
      />
    </div>
  );
}

export default UsersList;
