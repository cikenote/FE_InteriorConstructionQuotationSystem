import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "../../styles/components/shop.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ShopItem = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="landing-page">
        <div className="content">
          <h3 className="title">Shop</h3>
          <div className="links">
            <div className="home-link">Home</div>
            <div className="dot"></div>
            <div>Shop</div>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="product-list">
          <div className="product-detail">
            <img
              alt="product-alt"
              src="https://arkio-next.netlify.app/images/shop/1.jpg"
              className="image"
            />
            <div className="content">
              <a className="title" href="/shop/item/123">
                Black Timber Chairs
              </a>
              <p className="price">$65.00</p>
              <div className="button-cart">Add to cart</div>
            </div>
          </div>

          <div className="product-detail">
            <img
              alt="product-alt"
              src="https://arkio-next.netlify.app/images/shop/1.jpg"
              className="image"
            />
            <div className="content">
              <a className="title" href="/shop/item/123">
                Black Timber Chairs
              </a>
              <p className="price">$65.00</p>
              <div className="button-cart">Add to cart</div>
            </div>
          </div>

          <div className="product-detail">
            <img
              alt="product-alt"
              src="https://arkio-next.netlify.app/images/shop/1.jpg"
              className="image"
            />
            <div className="content">
              <a className="title" href="/shop/item/123">
                Black Timber Chairs
              </a>
              <p className="price">$65.00</p>
              <div className="button-cart">Add to cart</div>
            </div>
          </div>

          <div className="product-detail">
            <img
              alt="product-alt"
              src="https://arkio-next.netlify.app/images/shop/1.jpg"
              className="image"
            />
            <div className="content">
              <a className="title" href="/shop/item/123">
                Black Timber Chairs
              </a>
              <p className="price">$65.00</p>
              <div className="button-cart">Add to cart</div>
            </div>
          </div>

          <div className="product-detail">
            <img
              alt="product-alt"
              src="https://arkio-next.netlify.app/images/shop/1.jpg"
              className="image"
            />
            <div className="content">
              <a className="title" href="/shop/item/123">
                Black Timber Chairs
              </a>
              <p className="price">$65.00</p>
              <div className="button-cart">Add to cart</div>
            </div>
          </div>

          <div className="product-detail">
            <img
              alt="product-alt"
              src="https://arkio-next.netlify.app/images/shop/1.jpg"
              className="image"
            />
            <div className="content">
              <a className="title" href="/shop/item/123">
                Black Timber Chairs
              </a>
              <p className="price">$65.00</p>
              <div className="button-cart">Add to cart</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pagination">
        <div className="content">
          <div className="item">
            <IoIosArrowBack />
          </div>
          <div className="item active">1</div>
          <div className="item">2</div>
          <div className="item">3</div>
          <div className="item">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ShopItem;
