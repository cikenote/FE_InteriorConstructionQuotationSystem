import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { GoProject } from "react-icons/go";
import { LuQuote, LuTextQuote } from "react-icons/lu";
import { Link } from "react-router-dom";
import { PAGE_ROUTES } from "../../utils/constant";
import { Article, Dashboard } from "@mui/icons-material";

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
                {
                    key: "article",
                    icon: <Article />,
                    label: (
                        <Link
                            style={{ textDecoration: "none" }}
                            to={PAGE_ROUTES.STAFF.ARTICLE}
                        >
                            Article
                        </Link>
                    ),
                },
            ]}
        ></MainLayout>
    );
};

export default StaffRole;
