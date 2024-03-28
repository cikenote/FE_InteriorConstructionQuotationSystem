import { useRef, useState } from "react";
import "../../styles/components/header.scss";
import MobileMenu from "../MobileMenu/MobileMenu";
import "../../styles/components/header.scss";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Dropdown } from "antd";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router";
import { PAGE_ROUTES } from "../../utils/constant";
import QuotationStatus from "./QuotationStatus";

const Header = () => {
  const quotationStatusRef = useRef();
  const accessToken = localStorage.getItem("accessToken");
  const [menuActive, setMenuState] = useState(false);
  const navigate = useNavigate();
  const logoutAccount = () => {
    localStorage.clear();
    navigate(PAGE_ROUTES.LOGIN);
  };
  const getUser = localStorage.getItem("accessToken");
  const items = [
    {
      key: "quotation-status",
      label: (
        <div onClick={() => quotationStatusRef.current.openModal()}>
          Quotation status
        </div>
      ),
    },
    {
      key: "1",
      label: <div onClick={logoutAccount}>Log out</div>,
    },
  ];
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <header id="header">
      <QuotationStatus ref={quotationStatusRef} />

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
                  <a onClick={ClickHandler} className="navbar-brand" href="/">
                    <img src="/images/logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <CloseIcon className="ti-close"></CloseIcon>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <a onClick={ClickHandler} href={PAGE_ROUTES.HOME}>
                        Trang chủ
                      </a>
                    </li>

                    <li className="menu-item-has-children">
                      <a onClick={ClickHandler} href="/project">
                        Dự án
                      </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a onClick={ClickHandler} href="/blog">
                        Tin tức
                      </a>
                    </li>
                    <li>
                      <a onClick={ClickHandler} href="/contact">
                        Liên hệ
                      </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a onClick={ClickHandler} href="/shop">
                        Đồ nội thất
                      </a>
                    </li>

                    {/* <li>
                                            <a
                                                onClick={ClickHandler}
                                                href="/quotation"
                                            >
                                                Quotation
                                            </a>
                                        </li> */}

                    {accessToken && (
                      <li>
                        <a
                          onClick={ClickHandler}
                          href={PAGE_ROUTES.QUOTATION_FORM}
                        >
                          Báo giá
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-2">
                <div className="header-right">
                  {/* <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button
                        onClick={() => setMenuState(!menuActive)}
                        className="search-toggle-btn"
                      >
                        <SearchIcon
                          className={`fi ti-search ${
                            menuActive ? "ti-close" : "fi"
                          }`}
                        ></SearchIcon>
                      </button>
                      <div
                        className={`header-search-form ${
                          menuActive ? "header-search-content-toggle" : ""
                        }`}
                      >
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <SearchIcon className="fi-ti-search"></SearchIcon>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div> */}
                  {getUser ? (
                    <Dropdown
                      menu={{
                        items,
                      }}
                    >
                      <span className="">
                        <img
                          className=""
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                          }}
                          src="data:image/jpeg;base64,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"
                          alt=""
                        />
                      </span>
                    </Dropdown>
                  ) : (
                    <Button
                      shape="circle"
                      size="large"
                      icon={<FiUser />}
                      onClick={() => navigate(PAGE_ROUTES.LOGIN)}
                    ></Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
