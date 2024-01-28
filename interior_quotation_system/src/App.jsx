import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/home/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectPage from "./pages/project/ProjectPage";
import BlogPage from "./pages/blog/BlogPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
