import { GoProject } from "react-icons/go";
import { LuTextQuote } from "react-icons/lu";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { PAGE_ROUTES } from "../../utils/constant";
import Dashboard from "./Dashboard";

const AdminRole = () => {
  return (
    <MainLayout
      menuItems={[
        {
          key: "dashboard",
          icon: <Dashboard />,
          label: (
            <Link
              style={{ textDecoration: "none" }}
              to={PAGE_ROUTES.ADMIN.DASHBOARD}
            >
              Dashboard
            </Link>
          ),
        },
        {
          key: "users",
          icon: <GoProject />,
          label: (
            <Link
              style={{ textDecoration: "none" }}
              to={PAGE_ROUTES.ADMIN.USERS}
            >
              Users
            </Link>
          ),
        },
        {
          key: "projects",
          icon: <LuTextQuote />,
          label: (
            <Link
              style={{ textDecoration: "none" }}
              to={PAGE_ROUTES.ADMIN.PROJECTS}
            >
              Projects
            </Link>
          ),
        },
      ]}
    ></MainLayout>
  );
};

export default AdminRole;
