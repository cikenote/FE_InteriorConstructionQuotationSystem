import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/PageTitle/PageTitle";
import Project from "../../components/Propject/Project";
import Footer from "../../components/Footer/Footer";
import "../../styles/pages/projectPage.scss";
const ProjectPage = () => {
    return (
        <Fragment>
            <Navbar></Navbar>
            <PageTitle pageTitle={"Dự án"} pagesub={"Dự án"}></PageTitle>
            <Project />
            <Footer />
        </Fragment>
    );
};

export default ProjectPage;
