import { Link, } from "react-router-dom";
import { useEffect, useState } from "react";
import Error from "../Error/Error";
import axios from "axios";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        console.log("Making API call...");
        fetchArticles();
    }, [blogs]);

    const fetchArticles = async () => {
        try {
            const response = await axios.get("https://swp391api.developvn.click/api/Articles?page=1&pageSize=10&sortByDateDescending=true");
            if (response.data && response.data.responses) {
                setBlogs(response.data.responses.$values);
            } else {
                console.log("Error fetching articles: Response data or responses are undefined");
            }
        } catch (error) {
            console.log("Error fetching articles: ", error);
        }
    };

    return (
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12 col-lg-10 offset-lg-1">
                        <div className="wpo-blog-content">
                            {blogs && blogs.length > 0 ? (
                                blogs.map((blog) => (
                                    <div className="post format-standard-image" key={blog.$id}>
                                        <div className="entry-media video-holder">
                                            <img src={blog.img} alt="" />
                                        </div>
                                        <div className="entry-meta" >
                                            <div className="entry-details">
                                                <h2>
                                                    <Link to={{
                                                        pathname: `/blog/blog-detail/${blog.articleId}`,
                                                    }} className="read-more" style={{textDecoration: "none", listStyle: "none"}}>
                                                        {blog.title}
                                                    </Link>
                                                </h2>
                                                <p>{blog.content}</p>
                                            </div>
                                            <ul>
                                                <li>
                                                    <i className="fi flaticon-calendar"></i>{" "}
                                                    By <a href="/">{blog.authorName}</a>{" "}
                                                </li>
                                                <li>
                                                    <i className="fi flaticon-calendar"></i>{" "}
                                                    {blog.createdAt}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry-details">
                                            <h3>
                                                <Link to={{
                                                    pathname: `/blog/blog-detail/${blog.articleId}`,
                                                }} className="read-more">
                                                    READ MORE...
                                                </Link>
                                            </h3>
                                            <p>{blog.content}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <Error />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogList;
