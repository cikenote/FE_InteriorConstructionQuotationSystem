import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import TtyOutlinedIcon from "@mui/icons-material/TtyOutlined";
const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <footer className={`wpo-site-footer ${props.ftClass}`}>
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <a onClick={ClickHandler} className="logo" href="/home">
                    <img src="/images/logo-2.png" alt="logo" />
                  </a>
                </div>
                {/* <ul>
                  <li>
                    <a onClick={ClickHandler} href="/">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a onClick={ClickHandler} href="/">
                      <i className="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a onClick={ClickHandler} href="/">
                      <i className="ti-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a onClick={ClickHandler} href="/">
                      <i className="ti-google"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>DỊCH VỤ NỔI BẬT</h3>
                </div>
                <ul>
                  {Services.slice(0, 5).map((service, srv) => (
                    <li key={srv}>
                      <a onClick={ClickHandler} href="/service/[slug]">
                        {service.sTitle}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>THÔNG TIN LIÊN HỆ</h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      {" "}
                      <RoomOutlinedIcon /> Lô E2a-7, Đường D1, Đ. D1, Long Thạnh
                      Mỹ, <br /> Thành Phố Thủ Đức, Thành phố Hồ Chí Minh 700000
                    </li>
                    <li>
                      <TtyOutlinedIcon /> 028 7300 5588
                    </li>
                    <li>
                      <MarkEmailUnreadOutlinedIcon /> interior@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget instagram">
                <div className="widget-title">
                  <h3>DỰ ÁN NỔI BẬT</h3>
                </div>
                <ul className="d-flex">
                  {Projects.slice(0, 6).map((project, srv) => (
                    <li key={srv}>
                      <a onClick={ClickHandler} href="/project">
                        <img src={project.pImg} alt="" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <ul>
                <li>
                  &copy; 2024 Interior Quotation{" "}
                  <a onClick={ClickHandler} href="/"></a>. All Rights Reserved.
                </li>
                <li>
                  <a onClick={ClickHandler} href="/">
                    Terms of use |
                  </a>{" "}
                  <a onClick={ClickHandler} href="/">
                    Privacy Environmental Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  ftClass: PropTypes.string,
};

export default Footer;
