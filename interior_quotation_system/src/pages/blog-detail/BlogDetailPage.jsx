import { Fragment } from "react";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/PageTitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import "../../styles/components/blogSingle.scss";
import blogSingleImg1 from "/public/images/blog/img-1.jpg";

const BlogDetailPage = () => {
  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"Blog Detail"} pagesub="blog" />
      <section className="wpo-blog-single-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-10 offset-lg-1">
              <div className="wpo-blog-content">
                <div className="post format-standard-image">
                  <div className="entry-media">
                    <img src={blogSingleImg1} alt="Anh1" />
                  </div>
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="fi ti-user"></i> By <a href="/">Author</a>{" "}
                      </li>

                      <li>
                        <i className="fi flaticon-calendar"></i> Create at
                      </li>
                    </ul>
                  </div>
                  <h2>Title</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which do not
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there is not
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful.
                  </p>

                  <p>
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself,
                  </p>

                  <div className="gallery">
                    <div>
                      <img src={blogSingleImg1} alt="" />
                    </div>
                    <div>
                      <img src={blogSingleImg1} alt="" />
                    </div>
                  </div>

                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which do not
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there is not
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful.
                  </p>

                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which do not
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there is not
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful.
                  </p>

                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which do not
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there is not
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful.
                  </p>

                  <div className="gallery">
                    <div>
                      <img src={blogSingleImg1} alt="" />
                    </div>
                    <div>
                      <img src={blogSingleImg1} alt="" />
                    </div>
                  </div>
                  <div className="gallery">
                    <div>
                      <img src={blogSingleImg1} alt="" />
                    </div>
                    <div>
                      <img src={blogSingleImg1} alt="" />
                    </div>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which do not
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there is not
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful.
                  </p>
                </div>

                <div className="author-box">
                  <div className="author-avatar">
                    <a href="/" target="_blank">
                      <img src="Avatar nef" alt="Avatar nef" />
                    </a>
                  </div>
                  <div className="author-content">
                    <a href="/" className="author-name">
                      Author: Jenny Watson
                    </a>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default BlogDetailPage;
