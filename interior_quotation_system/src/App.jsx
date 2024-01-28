import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/home/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectPage from "./pages/project/ProjectPage";
import BlogPage from "./pages/blog/BlogPage";
import ProjectSingle from "./components/ProjectSingle/ProjectSingle";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/project/project-single" element={<ProjectSingle />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );

}
export default App;
