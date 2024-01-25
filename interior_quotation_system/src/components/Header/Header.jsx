import { useState } from "react";
import "../../styles/components/header.scss";
import MobileMenu from "../MobileMenu/MobileMenu";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

  const [menuActive, setMenuState] = useState(false);
  const [cartActive, setcartState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  const SubmitHandler = (e) => {
    e.preventDefault()
  }


  return (
    <header id="header">
      <div className="site-header header-style-1">
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="navbar-header">
                  <a onClick={ClickHandler} className="navbar-brand" href="/home">
                    <img src="Logo" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><CloseIcon className="ti-close"></CloseIcon></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <a onClick={ClickHandler} href="/">Home</a>
                    </li>

                    <li className="menu-item-has-children">
                      <a onClick={ClickHandler} href="/project">Project</a>

                    </li>
                    <li className="menu-item-has-children">
                      <a onClick={ClickHandler} href="/blog">Blog</a>
                    </li>
                    <li><a onClick={ClickHandler} href="/contact">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-2">
                <div className="header-right">
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><SearchIcon
                        className={`fi ti-search ${menuActive ? "ti-close" : "fi"}`}></SearchIcon></button>
                      <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input type="text" className="form-control"
                              placeholder="Search here..." />
                            <button type="submit"><SearchIcon
                              className="fi-ti-search"></SearchIcon></button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="mini-cart">
                    <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                      <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                      <span className="cart-count">Số lượng</span>
                    </button>
                    <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                      <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}><CloseIcon className="close-icon"/></button>
                      <div className="mini-cart-items">
                        <div className="mini-cart-item clearfix">
                          <div className="mini-cart-item-image">
                            <span>
                              <img src="ảnh nè" alt="icon" />
                            </span>
                          </div>
                          <div className="mini-cart-item-des">
                            <p>Tên sản phẩm </p>
                            <span className="mini-cart-item-price">
                              Số lượng x đơn giá
                            </span>
                            <span className="mini-cart-item-quantity">
                              <button
                                className="btn btn-sm btn-danger"
                              >
                                <CloseIcon className="ti-close"></CloseIcon>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mini-cart-action clearfix">
                        <span className="mini-checkout-price">Subtotal: <span> Tổng cộng</span></span>
                        <div className="mini-btn">
                          <a href="/checkout" className="view-cart-btn s1">Checkout</a>
                          <a href="/cart" className="view-cart-btn">View Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
};

export default Header;
