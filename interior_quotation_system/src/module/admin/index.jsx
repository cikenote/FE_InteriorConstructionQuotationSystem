import { Dashboard, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { PAGE_ROUTES } from "../../utils/constant";

const AdminRole = () => {
  return (
    <MainLayout
      menuItems={[
        {
          key: "user",
          icon: <Dashboard />,
          label: (
            <Link
              style={{ textDecoration: "none" }}
              to={PAGE_ROUTES.ADMIN.USERS}
            >
              User
            </Link>
          ),
        },
        {
          key: "settings",
          icon: <Settings />,
          label: (
            <Link
              style={{ textDecoration: "none" }}
              to={PAGE_ROUTES.ADMIN.SETTINGS}
            >
              Settings
            </Link>
          ),
        },
      ]}
    />
  );
};

export default AdminRole;
