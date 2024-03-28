import "../../styles/components/pricing.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Error from "../Error/Error";
const Pricing = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Making API call..."); // Log before the API call
        const response = await axios.get("https://swp391api.developvn.click/api/Products/GetListStyle");
        console.log("API response:", response.data); // Log the fetched data after a successful response
        setStyles(response.data.$values);
      } catch (error) {
        console.error("Error fetching data:", error); // Log any errors in fetching data
      }
    };
    fetchData();
    console.log(styles);
  }, []);

  console.log("styles state:", styles); // Log the state variable after rendering

  return (
    <section className={`wpo-pricing-section section-padding`}>
      <div className="container">
        <div className="row">
          <div className="wpo-section-title-s2">
            <span>Bảng Báo Giá Các Phong Các Thiết Kế</span>
            <h2>Bảng Giá</h2>
            <div className="invisible-text">
              <h2>Bảng Giá</h2>
            </div>
          </div>
        </div>
        <div className="wpo-pricing-wrap">
          <div className="row">
            {styles && styles.length > 0 ? (
              styles.map((style) => (
                <div className="col col-lg-3 col-md-6 col-12" key={style.id}>
                  <div className="wpo-pricing-item">
                    <div className="wpo-pricing-top">
                      <div className="pricing-thumb">
                        <span>{style.name}</span>
                      </div>
                      <div className="wpo-pricing-text">
                        <h2>
                          {style.price}<span>VNĐ/m²</span>
                        </h2>
                        {style.description}
                      </div>
                    </div>
                    <div className="wpo-pricing-bottom">
                      <div className="wpo-pricing-bottom-text">
                      {style.name === "Ý" ? (
                          <ul>
                            <li>Ý</li>
                            <li>Ý</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                          </ul>
                        ) : style.name === "Cổ điển" ? (
                          <ul>
                            <li>Cổ điển</li>
                            <li>Cổ điển</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                          </ul>
                        ) : style.name === "Nhật Bản" ? (
                          <ul>
                            <li>Nhật bản</li>
                            <li>Nhật bản</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                          </ul>
                        ) : style.name === "Tân Cổ Điển" ? (
                          <ul>
                            <li>Tân Cổ điển</li>
                            <li>Tân Cổ điển</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                          </ul>
                        ) : (
                          <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                          </ul>
                        )}
                        <a onClick={ClickHandler}>Nhận Báo Giá</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Error />
            )}
          </div>
        </div>
      </div>
      <div className="invisible-title1">
        <h2>Pricing</h2>
      </div>
    </section>
  );
};

export default Pricing;
