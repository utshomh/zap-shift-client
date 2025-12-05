import { useQuery } from "@tanstack/react-query";
import { HiOutlineEye, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { HiUserPlus, HiUserMinus } from "react-icons/hi2";

import useAxiosSecured from "../../hooks/useAxiosSecured";
import Loader from "../../ui/shared/Loader";
import alert from "../../lib/utils/alert";
import { useCallback } from "react";

const UsersPage = () => {
  const axios = useAxiosSecured();
  const {
    data: users,
    isLoading,
    isError,
    refetch,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get("/users").then((res) => res.data),
  });

  const changeRole = useCallback(
    async (user, role) => {
      const { _id: id, displayName } = user;

      try {
        await axios.patch(`users/${id}`, { role });
        alert.success(
          "Role Changed!",
          `Changed ${displayName}'s role as an ${role.toUpperCase()}.`
        );
        await refetch();
      } catch (error) {
        alert.error(
          "Oops!",
          error.message || "Something went wrong. Please try again."
        );
      }
    },
    [axios, refetch]
  );

  const handleRoleChange = useCallback(
    (user) => {
      const newRole = user.role === "admin" ? "user" : "admin";
      changeRole(user, newRole);
    },
    [changeRole]
  );

  if (isError) throw new Error(error.message);

  if (isLoading) return <Loader />;

  return (
    <div className="p-8 bg-base-100 rounded-xl space-y-6">
      <h1 className="text-2xl font-bold">Riders</h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Switch Roles</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="font-bold">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={user.photoURL} alt="User Avatar" />
                    </div>
                  </div>
                </td>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>
                  <p className="badge badge-accent font-bold">
                    {user.role.toUpperCase()}
                  </p>
                </td>
                <td>
                  <button
                    className="join-item btn btn-square"
                    disabled={isLoading}
                    onClick={() => handleRoleChange(user)}
                  >
                    {user.role === "admin" ? (
                      <HiUserMinus className="text-xl" />
                    ) : (
                      <HiUserPlus className="text-xl" />
                    )}
                  </button>
                </td>
                <td className="join">
                  <button className="join-item btn btn-square">
                    <HiOutlineEye className="text-xl" />
                  </button>

                  <button className="join-item btn btn-square">
                    <HiOutlinePencil className="text-xl" />
                  </button>

                  <button
                    className="join-item btn btn-square"
                    onClick={() => {}}
                  >
                    <HiOutlineTrash className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
