import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/blog.scss";

const Blog = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log("Making API call...");
    fetchArticles();
  }, [blogs]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "https://swp391api.developvn.click/api/Articles?page=1&pageSize=10&sortByDateDescending=true"
      );
      if (response.data && response.data.responses) {
        setBlogs(response.data.responses.$values);
      } else {
        console.log(
          "Error fetching articles: Response data or responses are undefined"
        );
      }
    } catch (error) {
      console.log("Error fetching articles: ", error);
    }
  };

  return (
    <section className="wpo-blog-section section-padding" id="blog">
      <div className="container">
        <div className="row">
          <div className="wpo-section-title-s2">
            <span>Bài Viết Mới Nhất Của Chúng Tôi</span>
            <h2>Tin Tức</h2>
          </div>
        </div>
        <div className="wpo-blog-items">
          <div className="row">
            {blogs.splice(0, 3).map((blog, Bitem) => (
              <div className="col col-lg-4 col-md-6 col-12" key={Bitem}>
                <div className="wpo-blog-item">
                  <div className="wpo-blog-img">
                    <img src={blog.img} alt="" />
                    <div className="thumb">{blog.articleTypeName}</div>
                  </div>
                  <div className="wpo-blog-content">
                    <ul>
                      <li>{blog.createdAt}</li>
                      <li>
                        By{" "}
                        <Link
                          to={{
                            pathname: `/blog/blog-detail/${blog.articleId}`,
                          }}
                          onClick={ClickHandler}
                        >
                          {blog.authorName}
                        </Link>
                      </li>
                    </ul>
                    <h2>
                      <Link
                        to={{
                          pathname: `/blog/blog-detail/${blog.articleId}`,
                        }}
                        onClick={ClickHandler}
                      >
                        {blog.title}
                      </Link>
                    </h2>
                    <p>{blog.articleTypeName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="vector-1">
        <img src="../../../public/images/blog/Vector1.png" alt="" />
      </div>
      <div className="vector-2">
        <img src="../../../public/images/blog/Vector2.png" alt="" />
      </div>
    </section>
  );
};

export default Blog;
