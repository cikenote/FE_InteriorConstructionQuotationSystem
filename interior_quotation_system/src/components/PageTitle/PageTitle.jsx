import PropTypes from "prop-types"; // Import PropTypes

import { Link } from "react-router-dom";
import "../../styles/components/pagetitle.scss";
import { PAGE_ROUTES } from "../../utils/constant";

const PageTitle = (props) => {
  return (
    <section className="wpo-page-title">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-breadcumb-wrap">
              <h2>{props.pageTitle}</h2>
              <ol className="wpo-breadcumb-wrap">
                <li>
                  <Link to={PAGE_ROUTES.HOME}>Trang chủ</Link>{" "}
                </li>
                <li>
                  <span>{props.pagesub}</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pagesub: PropTypes.string.isRequired,
};

export default PageTitle;
