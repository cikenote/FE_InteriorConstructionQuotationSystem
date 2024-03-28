import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectSingle from "./components/ProjectSingle/ProjectSingle";
import "./index.css";
import StaffRole from "./module/staff";
import StaffProducts from "./module/staff/Products";
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
import Dashboard from './module/staff/Dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/project/project-single" element={<ProjectSingle />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/blog-detail" element={<BlogDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/quotation" element={<QuotationPage />} />
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
        <Route path={PAGE_ROUTES.STAFF.DASHBOARD} element={<Dashboard />} />
        <Route
          path={PAGE_ROUTES.STAFF.QUOTATIONS}
          element={<StaffQuotation />}
        />
        <Route path={PAGE_ROUTES.STAFF.PRODUCTS} element={<StaffProducts />} />
      </Route>
    </Routes>
  );
}
export default App;
