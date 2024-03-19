import { Link } from "react-router-dom";
// import blogs from "../../api/blogs";
// import BlogDetailPage from "../../pages/blog-detail/BlogDetailPage";
import { useEffect, useState } from "react";
import articlesAPI from "../../api/articles";
import Error from "../Error/Error";
const BlogList = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        console.log("Making API call..."); // Log before the API call
        fetchArticles()
        console.log(fetchArticles());
    }, [])

    const fetchArticles = async () => {
        try {
            const response = await articlesAPI.getListArticles(1);
            console.log("API response:", response.data); // Log the fetched data after a successful response
            setBlogs(response.data);
        } catch (error) {
            console.log("Error fetching articles: ", error);
        }
    }
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };
    return (
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div
                        className={`col col-lg-8 col-12 col-lg-10 offset-lg-1`}
                    >
                        <div className="wpo-blog-content">
                            {blogs && blogs.length > 0 ? (
                                blogs.map((blog, bitem) => (
                                    <div
                                        className={`post  ${blog.blClass}`}
                                        key={bitem}
                                    >
                                        <div className="entry-media video-holder">
                                            <img src={blog.blogSingleImg} alt="" />
                                        </div>
                                        <div className="entry-meta">
                                            <ul>
                                                <li>
                                                    <i className="fi ti-user"></i>{" "}
                                                    By <a href="/">{blog.author}</a>{" "}
                                                </li>
                                                {/* <li>
                                                <i className="fi ti-comment-alt"></i>{" "}
                                                Comments {blog.comment}
                                            </li> */}
                                                <li>
                                                    <i className="fi flaticon-calendar"></i>{" "}
                                                    {blog.create_at}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry-details">
                                            <h3>
                                                <Link
                                                    to="/blog/blog-detail"
                                                    onClick={ClickHandler}
                                                >
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                            <p>
                                                Law is a great career path if you
                                                want to build a broad skill set that
                                                includes everything from critical
                                                thinking and strategic planning to
                                                communications. If you love rising
                                                to a challenge.
                                            </p>
                                            <Link
                                                to="/blog/blog-detail"
                                                onClick={ClickHandler}
                                                className="read-more"
                                            >
                                                READ MORE...
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <Error />
                            )}

                        </div>
                    </div>
                    {/* <BlogSidebar blLeft={props.blLeft} /> */}
                </div>
            </div>
        </section>
    );
};

export default BlogList;
