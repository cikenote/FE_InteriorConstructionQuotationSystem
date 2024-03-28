import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { GoProject } from "react-icons/go";
import { LuQuote } from "react-icons/lu";
import { Link } from "react-router-dom";
import { PAGE_ROUTES } from "../../utils/constant";
import { Dashboard } from "@mui/icons-material";

const StaffRole = () => {
    return (
        <MainLayout
            menuItems={[
                {
                    key: "projects",
                    icon: <GoProject />,
                    label: (
                        <Link
                            style={{ textDecoration: "none" }}
                            to={PAGE_ROUTES.STAFF.PROJECTS}
                        >
                            Projects
                        </Link>
                    ),
                },
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
                // {
                //   key: "products",
                //   icon: <GoProject />,
                //   label: (
                //     <Link
                //       style={{ textDecoration: "none" }}
                //       to={PAGE_ROUTES.STAFF.PRODUCTS}
                //     >
                //       Product
                //     </Link>
                //   ),
                // },
                {
                    key: "quotation",
                    icon: <LuQuote />,
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
