import { GoProject } from "react-icons/go";
import { LuTextQuote } from "react-icons/lu";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { PAGE_ROUTES } from "../../utils/constant";
import Dashboard from "./Dashboard";
const StaffRole = () => {
  return (
    <MainLayout
      menuItems={[
        {
          key: "dashboard",
          icon: <Dashboard />,
          label: (
            <Link
              style={{ textDecoration: "none" }}
              to={PAGE_ROUTES.STAFF.DASHBOARD}
            >
              Dashboard
            </Link>
          ),
        },
        {
          key: "product",
          icon: <GoProject />,
          label: (
            <Link
              style={{ textDecoration: "none" }}
              to={PAGE_ROUTES.STAFF.PRODUCT}
            >
              Product
            </Link>
          ),
        },
        {
          key: "quotation",
          icon: <LuTextQuote />,
          label: (
            <Link
              style={{ textDecoration: "none" }}
              to={PAGE_ROUTES.STAFF.QUOTATIONS}
            >
              Quotations
            </Link>
          ),
        },
      ]}
    ></MainLayout>
  );
};

export default StaffRole;
