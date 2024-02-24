import React from "react";
import "../../styles/components/shop.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FcRating } from "react-icons/fc";
import { CiStar } from "react-icons/ci";

const ItemDetail = () => {
  return (
    <div>
      <Header></Header>
      <div className="landing-page">
        <div className="content">
          <h3 className="title">Product Details</h3>
          <div className="links">
            <div className="home-link">Home</div>
            <div className="dot"></div>
            <div>Product Details</div>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="product-info">
          <div className="product-data">
            <img
              alt="product-alt"
              src="https://arkio-next.netlify.app/images/shop/1.jpg"
              className="product-image"
            ></img>
            <div className="product-detail">
              <h3 className="title">Black Timber Chairs</h3>
              <div className="rating">
                <div className="stars">
                  <CiStar className="icon" />
                  <CiStar className="icon" />
                  <CiStar className="icon" />
                  <CiStar className="icon" />
                  <CiStar className="icon" />
                </div>
                <div>(25 customer reviews)</div>
              </div>

              <div className="price-data">
                <div className="price">$65.00</div>
                <s>$85.00</s>
              </div>

              <div className="desc-product">
                There are many variations of passages of Lorem Ipsum and
                available, but the majority have suffered alteration in somey
                form.
              </div>

              <div className="item-list">
                <div className="item-detail">
                  <div className="dot"></div>
                  <div>
                    Going through the cites of the word in classNameical.
                  </div>
                </div>
                <div className="item-detail">
                  <div className="dot"></div>
                  <div>
                    Going through the cites of the word in classNameical.
                  </div>
                </div>
                <div className="item-detail">
                  <div className="dot"></div>
                  <div>
                    Going through the cites of the word in classNameical.
                  </div>
                </div>
              </div>

              <button className="btn-cart">Add to quotation</button>
              <div className="item">
                Categories: <span className="value">Book</span>
              </div>

              <div className="item">
                Tags <span className="value">Kithen, Basement, Bathroom</span>
              </div>
            </div>
          </div>
          <div className="description">
            <div>
              Samsa woke from troubled dreams, he found himself transformed in
              his bed into a horrible vermin. He lay on his armour-like back,
              and if he lifted his head a little he could see his brown belly,
              slightly domed and divided by arches into stiff sections. The
              bedding was hardly able to cover it and seemed ready to slide off
              any moment. His many legs, pitifully thin compared with the size
              of the rest of him.
            </div>

            <div>
              The bedding was hardly able to cover it and seemed ready to slide
              off any moment. His many legs, pitifully thin compared with the
              size of the rest of himSamsa woke from troubled dreams, he found
              himself transformed in his bed into a horrible vermin.
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ItemDetail;
