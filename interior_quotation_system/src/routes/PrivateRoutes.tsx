import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PAGE_ROUTES } from "../utils/constant";

const PrivateRoutes = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? <Outlet /> : <Navigate to={PAGE_ROUTES.HOME} />;
};

export default PrivateRoutes;
