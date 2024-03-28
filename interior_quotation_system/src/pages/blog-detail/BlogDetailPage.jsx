import React, { Fragment, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import "../../styles/components/blogSingle.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Error from "../../components/Error/Error";

const BlogDetailPage = () => {
    const { articlesId } = useParams();
    const [blog, setBlog] = useState();
    console.log(articlesId);
    const fetchArticlesId = async () => {
        try {
            const response = await axios.get(`https://swp391api.developvn.click/api/Articles/${articlesId}`);
            if (response.data) {
                setBlog(response.data);
            } else {
                console.log("Error rồi")
            }
        } catch (e) {
            console.log("Error", e)
        }
    }

    useEffect(() => {
        fetchArticlesId();
    }, [blog])
    
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={"Blog Detail"} pagesub="blog" />
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-10 offset-lg-1">
                            <div className="wpo-blog-content">
                                {blog ? (
                                    <div className="post format-standard-image">
                                        <div className="entry-media">
                                            <img src={blog.img} alt="Blog Image" />
                                        </div>
                                        <div className="entry-meta">
                                            <ul>
                                                <li>
                                                    <i className="fi ti-user"></i>{" "}
                                                    By <a href="/">{blog.authorName}</a>{" "}
                                                </li>
                                                <li>
                                                    <i className="fi flaticon-calendar"></i>{" "}
                                                    {blog.createdAt}
                                                </li>
                                            </ul>
                                        </div>
                                        <h2>{blog.title}</h2>
                                        <p>{blog.content}</p>
                                    </div>
                                ) : (
                                    // <Error />
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>

    );
};


export default BlogDetailPage;
