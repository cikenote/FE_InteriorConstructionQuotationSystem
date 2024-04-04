// import { useMutation } from "@tanstack/react-query";
// import { Skeleton, message } from "antd";
// import { useEffect, useRef, useState } from "react";
// import AccountManagerAPI from "../../../api/products";
// import TableLayout from "../../../layouts/TableLayout";
// import UserModal from "./UserModal";
// import { USER_COLUMNS } from "./constant";
// import "./style.scss";
// const AdminUser = () => {
//   const [users, setUsers] = useState([]);
//   const [, setIsLoading] = useState(true);
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await AccountManagerAPI.getUsersList({
//           page: 1,
//           pageSize: 20,
//         });
//         setUsers(response.users); // Assuming the structure of response is { users: [...] }
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const {
//     isPending: isLoadingUsers,
//     mutate: mutateUsersList,
//     data: usersData,
//   } = useMutation({
//     mutationFn: AccountManagerAPI.getUsersList,
//     mutationKey: "users-list",
//     onSuccess: (response) => {
//       setUsers(response); // Assuming the structure of response is an array of users
//     },
//     onError: (error) => {
//       console.log(error);
//     },
//   });

//   const { isPending: isLoadingDeleteUser, mutate: mutateDeleteUser } =
//     useMutation({
//       mutationFn: AccountManagerAPI.deleteUser,
//       mutationKey: "delete-user",
//       onSuccess: () => {
//         message.success("Delete user successful");
//         mutateUsersList();
//       },
//       onError: () => {
//         message.error("Error occurred when deleting user");
//       },
//     });

//   const userActionModal = useRef();

//   const searchAdminUsers = (event) => {
//     const keyword = event.target.value.toLowerCase();
//     if (usersData) {
//       const result = usersData.filter((user) =>
//         user.username.toLowerCase().includes(keyword)
//       );
//       setUsers(result);
//     }
//   };

//   useEffect(() => {
//     mutateUsersList();
//   }, []);

//   const deleteUser = (userId) => {
//     mutateDeleteUser(userId);
//   };

//   if (isLoadingUsers || isLoadingDeleteUser) {
//     return <Skeleton paragraph={{ rows: 5 }} />;
//   }

//   return (
//     <div className="user-container">
//       <UserModal ref={userActionModal} />
//       <TableLayout
//         tableColumns={USER_COLUMNS}
//         tableDataSource={() => users}
//         actionName={"New User"}
//         onchangeSearch={searchAdminUsers}
//         addNewAction={() => userActionModal.current.openModal()}
//         onDeleteUser={deleteUser}
//       />
//     </div>
//   );
// };

// export default AdminUser;
import { useMutation } from "@tanstack/react-query";
import { Skeleton, message } from "antd";
import { useEffect, useRef, useState } from "react";
import AccountManagerAPI from "../../../api/products";
import TableLayout from "../../../layouts/TableLayout";
import UserModal from "./UserModal";
import { USER_COLUMNS } from "./constant";
import "./style.scss";

const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userActionModal = useRef();

  const {
    isPending: isLoadingUsers,
    mutate: mutateUsersList,
    data: usersData,
  } = useMutation({
    mutationFn: AccountManagerAPI.getUsersList,
    mutationKey: "users-list",
    onSuccess: (response) => {
      setUsers(response.users);
      setIsLoading(false);
    },
    onError: (error) => {
      console.error("Error fetching users:", error);
      setIsLoading(false);
    },
  });

  const { isPending: isLoadingDeleteUser, mutate: mutateDeleteUser } =
    useMutation({
      mutationFn: AccountManagerAPI.deleteUser,
      mutationKey: "delete-user",
      onSuccess: () => {
        message.success("Delete user successful");
        mutateUsersList();
      },
      onError: () => {
        message.error("Error occurred when deleting user");
      },
    });

  const searchAdminUsers = (event) => {
    const keyword = event.target.value.toLowerCase();
    if (usersData) {
      const result = usersData.filter((user) =>
        user.username.toLowerCase().includes(keyword)
      );
      setUsers(result);
    }
  };

  useEffect(() => {
    mutateUsersList();
  }, []);

  const deleteUser = (userId) => {
    mutateDeleteUser(userId);
  };

  if (isLoading || isLoadingUsers || isLoadingDeleteUser) {
    return <Skeleton paragraph={{ rows: 5 }} />;
  }

  return (
    <div className="user-container">
      <UserModal ref={userActionModal} />
      <TableLayout
        tableColumns={USER_COLUMNS}
        tableDataSource={() => users}
        actionName={"New User"}
        onchangeSearch={searchAdminUsers}
        addNewAction={() => userActionModal.current.openModal()}
        onDeleteUser={deleteUser}
      />
    </div>
  );
};

export default AdminUser;
