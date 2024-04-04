import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./PrivateRoutes";
import ProjectSingle from "./components/ProjectSingle/ProjectSingle";
import "./index.css";
import StaffRole from "./module/staff";
import StaffArticle from "./module/staff/Article/ArticleModal";
import StaffDashboard from "./module/staff/Dashboard/Dashboard";

import StaffProjects from "./module/staff/Projects";
import StaffQuotation from "./module/staff/Quotation";
import BlogDetailPage from "./pages/blog-detail/BlogDetailPage";
import BlogPage from "./pages/blog/BlogPage";
import ContactPage from "./pages/contact/ContactPage";
import ForgotPasswordPage from "./pages/forgot-password/ForgotPasswordPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import ProjectPage from "./pages/project/ProjectPage";
import QuotationFormPage from "./pages/quotation/Form";
import QuotationPage from "./pages/quotation/QuotationPage";
import RegisterPage from "./pages/register/RegisterPage";
import ItemDetail from "./pages/shop/ItemDetail";
import ShopItem from "./pages/shop/index";
import { PAGE_ROUTES } from "./utils/constant";
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
      <Route
        path="/project/project-single/:projectId"
        element={<ProjectSingle />}
      />
      <Route path="/blog" element={<BlogPage />} />
      <Route
        path="/blog/blog-detail/:articlesId"
        element={<BlogDetailPage />}
      />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/quotation" element={<QuotationPage />} />
      <Route path="/quotation/form" element={<QuotationFormPage />} />
      <Route path="/shop" element={<ShopItem />} />
      <Route path="/shop/item/:productId" element={<ItemDetail />} />
      <Route path="/login" index element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route
        path={PAGE_ROUTES.QUOTATION_FORM}
        element={<QuotationFormPage />}
      />

      <Route path={PAGE_ROUTES.STAFF.MAIN} element={<StaffRole />}>
        <Route path={PAGE_ROUTES.STAFF.PROJECTS} element={<StaffProjects />} />
        <Route
          path={PAGE_ROUTES.STAFF.QUOTATIONS}
          element={<StaffQuotation />}
        />
        <Route path={PAGE_ROUTES.STAFF.PRODUCT} element={<StaffQuotation />} />
        <Route
          path={PAGE_ROUTES.STAFF.DASHBOARD}
          element={<StaffDashboard />}
        />
        <Route path={PAGE_ROUTES.STAFF.ARTICLE} element={<StaffArticle />} />
      </Route>
    </Routes>
  );
}
export default App;
