import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectSingle from "./components/ProjectSingle/ProjectSingle";
import "./index.css";
import AdminRole from "./module/admin";
import AdminDashboard from "./module/admin/Dashboard"; // New Admin Dashboard Component
import AdminUser from "./module/admin/User";
import StaffRole from "./module/staff";
import StaffArticle from "./module/staff/Article";
import StaffProduct from "./module/staff/Product";
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
import PrivateRoutes from "./routes/PrivateRoutes";
<<<<<<< HEAD
import YourAccount from "./pages/yourAccount/YourAccount.jsx";
import {PAGE_ROUTES} from "./utils/constant.tsx";
=======
import { PAGE_ROUTES } from "./utils/constant";

>>>>>>> f0e2c07b48ec6a2ccdf5e17f8cadebfe209e2a09
function App() {
  return (
    <Routes>
      <Route path={PAGE_ROUTES.HOME} element={<HomePage />} />
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
        {/* Add Admin Dashboard Route */}
        <Route path={PAGE_ROUTES.ADMIN.MAIN} element={<AdminRole />}>
          <Route
            path={PAGE_ROUTES.ADMIN.DASHBOARD}
            element={<AdminDashboard />}
          />
          <Route path={PAGE_ROUTES.ADMIN.USERS} element={<AdminUser />} />
        </Route>
        {/* End of Admin Routes */}
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
      {/* <Route path="/your-account" element={<YourAccount />} /> */}
      <Route path="/shop/item/:productId" element={<ItemDetail />} />
      <Route path={PAGE_ROUTES.STAFF.MAIN} element={<StaffRole />}>
        <Route
          path={PAGE_ROUTES.STAFF.QUOTATIONS}
          element={<StaffQuotation />}
        />
        <Route path={PAGE_ROUTES.STAFF.PRODUCT} element={<StaffProduct />} />
        {/* <Route
          path={PAGE_ROUTES.STAFF.DASHBOARD}
          element={<StaffDashboard />}
        /> */}
        <Route path={PAGE_ROUTES.STAFF.ARTICLE} element={<StaffArticle />} />
      </Route>
    </Routes>
  );
}

export default App;
