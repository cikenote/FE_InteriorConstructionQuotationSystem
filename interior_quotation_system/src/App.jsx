import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/home/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectPage from "./pages/project/ProjectPage";
import ProjectSingle from "./components/ProjectSingle/ProjectSingle";
import BlogPage from "./pages/blog/BlogPage";
import ShopItem from "./pages/shop/index";
import ItemDetail from "./pages/shop/ItemDetail";
import QuotationPage from "./pages/quotation/QuotationPage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import ForgotPasswordPage from "./pages/forgot-password/ForgotPasswordPage";
import BlogDetailPage from "./pages/blog-detail/BlogDetailPage";
import { PAGE_ROUTES } from "./utils/constant";
import StaffRole from "./module/staff";
import StaffQuotation from "./module/staff/Quotation";
import StaffProduct from "./module/staff/Product";
import QuotationFormPage from "./pages/quotation/Form";
import PrivateRoutes from "./routes/PrivateRoutes";
import StaffDashboard from "./module/staff/Dashboard";
import StaffArticle from "./module/staff/Article";
import YourAccount from "./pages/yourAccount/YourAccount.jsx";
function App() {
  return (
    <Routes>
      <Route path={PAGE_ROUTES.HOME} index element={<HomePage />} />
      <Route
        path={PAGE_ROUTES.FORGOT_PASSWORD}
        element={<ForgotPasswordPage />}
      />
      <Route path={PAGE_ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={PAGE_ROUTES.REGISTER} element={<RegisterPage />} />
      <Route element={<PrivateRoutes />}>
        <Route
          path={PAGE_ROUTES.QUOTATION_FORM}
          element={<QuotationFormPage />}
        />
      </Route>

      <Route path="/project" element={<ProjectPage />} />
      <Route path="/project/project-single" element={<ProjectSingle />} />
      <Route path="/project/project-single/:projectId" element={<ProjectSingle />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/blog-detail/:articlesId" element={<BlogDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/quotation" element={<QuotationPage />} />
      <Route path="/quotation/form" element={<QuotationFormPage />} />
      <Route path="/shop" element={<ShopItem />} />
        <Route path="/your-account" element={<YourAccount />} />
      <Route path="/shop/item/:productId" element={<ItemDetail />} />
      <Route path={PAGE_ROUTES.STAFF.MAIN} element={<StaffRole />}>
      
        <Route
          path={PAGE_ROUTES.STAFF.QUOTATIONS}
          element={<StaffQuotation />}
        />
        <Route path={PAGE_ROUTES.STAFF.PRODUCT} element={<StaffProduct />} />
        <Route path={PAGE_ROUTES.STAFF.DASHBOARD} element={<StaffDashboard />} />
        <Route path={PAGE_ROUTES.STAFF.ARTICLE} element={<StaffArticle />} />
      </Route>
    </Routes>
  );
}
export default App;
