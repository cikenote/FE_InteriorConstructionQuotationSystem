import "../../styles/components/pricing.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Error from "../Error/Error";
import { Link } from "react-router-dom"
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
                            <li>Cái nôi của văn hoá kiến trúc châu Âu</li>
                            <li>Chuẩn mực cho sự tinh tế</li>
                            <li>Thiết kế sang trọng, hài hoà</li>
                            <li>Nghệ thuật, ấn tượng.</li>
                            <li>Ấm cúng, sang trọng.</li>
                          </ul>
                        ) : style.name === "Cổ điển" ? (
                          <ul>
                            <li>Sang trọng, quý phái, đẳng cấp.</li>
                            <li>Chi tiết trang trí cầu kỳ, hoa văn tinh xảo.</li>
                            <li>Màu sắc lộng lẫy, tráng lệ.</li>
                            <li>Chi tiết trang trí dát vàng, phào chỉ, tranh sơn dầu.</li>
                            <li>Phù hợp với người yêu thích sự sang trọng, đẳng cấp.</li>
                          </ul>
                        ) : style.name === "Nhật Bản" ? (
                          <ul>
                            <li>Vẻ đẹp thanh bình, tinh tế.</li>
                            <li>Gần gũi thiên nhiên.</li>
                            <li>Màu sắc trung tính, nhẹ nhàng.</li>
                            <li>Chi tiết trang trí mang đậm dấu ấn Nhật Bản.</li>
                            <li>Phù hợp với người yêu thích sự yên bình, thư giãn.</li>
                          </ul>
                        ) : style.name === "Tân cổ điển" ? (
                          <ul>
                            <li>Giao thoa giữa hiện đại và cổ điển.</li>
                            <li>Thanh lịch, tiện nghi, sang trọng.</li>
                            <li>Màu sắc pastel kết hợp gam màu trầm ấm.</li>
                            <li>Chi tiết trang trí tinh tế, hoa văn đẹp mắt.</li>
                            <li>Phù hợp với người yêu thích sự thanh lịch, sang trọng.</li>
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
                        <Link to={"/quotation/form"} onClick={ClickHandler}>Nhận Báo Giá</Link>
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
