import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
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
function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/project/project-single" element={<ProjectSingle />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quotation" element={<QuotationPage />} />
            <Route path="/shop" element={<ShopItem />} />
            <Route path="/shop/item/:id" element={<ItemDetail />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}
export default App;
