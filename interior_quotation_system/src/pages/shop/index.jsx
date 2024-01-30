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
          <h3 className="title">Product</h3>
          <div className="links">
            <div className="home-link">Home</div>
            
            <div className="dot"></div>
            <div>Product</div>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="product-list">

          <div className="product-detail">
            <img
              alt="product-alt"
              src="https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/ghe-don-sofa-vai-cao-cap-furnist-bora-do_svg23w.jpg"
              className="image"
            />
            <div className="content">
              <a className="title" href="/shop/item/details">
              Single Sofa Chairs
              </a>
              <p className="price">$100.00</p>
              <div className="button-cart">Add to cart</div>
            </div>
          </div>

          <div className="product-detail">
            <img
              alt="product-alt"
              src="https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/cac-dong-san-pham-cua-noi-that-the-one-5_smjptc.jpg"
              className="image"
            />
            <div className="content">
              <a className="title" href="/shop/item/details">
              Sofa Table Set
              </a>
              <p className="price">$165.00</p>
              <div className="button-cart">Add to cart</div>
            </div>
          </div>

          <div className="product-detail">
            <img
              alt="product-alt"
              src="https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/Ori-furniture-3_qnlft8.jpg"
              className="image"
            />
            <div className="content">
              <a className="title" href="/shop/item/details">
              Wooden Chair with Cushion
              </a>
              <p className="price">$125.00</p>
              <div className="button-cart">Add to cart</div>
            </div>
          </div>

          <div className="product-detail">
            <img
              alt="product-alt"
              src="https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591145/2020bentleyfurniture1-1590839816_zmgphk.jpg"
              className="image"
            />
            <div className="content">
              <a className="title" href="/shop/item/details">
                Black Timber Chairs
              </a>
              <p className="price">$65.00</p>
              <div className="button-cart">Add to cart</div>
            </div>
          </div>

          <div className="product-detail">
            <img
              alt="product-alt"
              src="https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/bo-ban-an-thong-minh-gap-gon-04_spqcu9.jpg"
              className="image"
            />
            <div className="content">
              <a className="title" href="/shop/item/details">
              Folding Dining Table Set
              </a>
              <p className="price">$265.00</p>
              <div className="button-cart">Add to cart</div>
            </div>
          </div>

          <div className="product-detail">
            <img
              alt="product-alt"
              src="https://res.cloudinary.com/dnzzvunuu/image/upload/v1706591146/n%E1%BB%99i-th%E1%BA%A5t-in-3d-15_zqm0wq.jpg"
              className="image"
            />
            <div className="content">
              <a className="title" href="/shop/item/details">
              Relaxation Table Set
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
