import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/PageTitle/PageTitle";
import BlogList from "../../components/BlogList/BlogList";
import Footer from "../../components/Footer/Footer";
import "../../styles/pages/blogPage.scss";
const BlogPage = () => {
    return (
        <Fragment>
            <Navbar></Navbar>
            <PageTitle pageTitle="Tin tức" pagesub="Tin tức" />
            <BlogList />
            <Footer />
        </Fragment>
    );
};

export default BlogPage;
