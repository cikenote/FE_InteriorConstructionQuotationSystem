import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/home/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectPage from "./pages/project/ProjectPage";
import ProjectSingle from "./components/ProjectSingle/ProjectSingle";
import BlogPage from "./pages/blog/BlogPage";
import QuotationPage from "./pages/quotation/QuotationPage";
function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/project/project-single" element={<ProjectSingle />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quotation" element={<QuotationPage/>} />
        </Routes>
    );
}
export default App;
