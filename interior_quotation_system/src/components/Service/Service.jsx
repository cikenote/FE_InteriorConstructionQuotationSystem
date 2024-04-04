// import Services from "../../api/services.js";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../styles/components/service.scss";
import "../../styles/pages/homePage.scss";
const Service = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(
          "https://swp391api.developvn.click/api/Projects?page=1&pageSize=10&sortByDateDescending=true"
        );
        console.log("Response: ", response.data.products.$values);
        setProjects(response.data.products.$values);
      } catch (err) {
        console.log("Error fetching: ", err);
      }
    };
    fetchAPI();
  }, []);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className={`wpo-service-area-s2 section-padding pt-0`}>
      <div className="container-fluid">
        <div className="row">
          <div className="wpo-section-title-s2">
            <span>Năng Lực Của Chúng Tôi</span>
            <h2>Dự Án Đã Thực Hiện</h2>
            <div className="invisible-text">
              <h2>Dự Án</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          {projects.splice(1, 3).map((project, sitem) => (
            <div className="col-lg-4 col-md-6 col-12" key={sitem}>
              <div className="wpo-service-item">
                <div className="wpo-service-img">
                  <img src={project.projectImage} alt="" />
                </div>
                <div className="wpo-service-text">
                  <h2>
                    <a onClick={ClickHandler}>{project.projectTitle}</a>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
