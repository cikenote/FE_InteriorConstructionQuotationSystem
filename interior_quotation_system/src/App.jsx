import "./App.css";
import Page_404 from "./components/Error/Error";
import HomePage from "./pages/home/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/login/LoginPage";

// import ProjectPage from "./pages/project/ProjectPage";
// import ProjectSingle from "./components/ProjectSingle/ProjectSingle";
function App() {
    return (
        <HomePage />
        // <ProjectPage />
        // <ProjectSingle />
        // <Page_404 />
        // <LoginPage></LoginPage>
    );
}

export default App;
