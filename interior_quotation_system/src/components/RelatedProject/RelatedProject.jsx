import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/projectSingle.scss";

const RelatedProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(
          "https://swp391api.developvn.click/api/Projects?page=1&pageSize=10&sortByDateDescending=true"
        );
        console.log("Response: ", response.data.$values);
        setProjects(response.data.$values);
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
    <div className="wpo-project-single-item">
      <div className="wpo-project-single-title">
        <h3>Related Projects</h3>
      </div>
      <div className="wpo-project-area">
        <div className="row align-items-center">
          <div className="wpo-project-wrap">
            <div className="sortable-gallery">
              <div className="row">
                <div className="col-lg-12">
                  <div className="project-grids gallery-container clearfix">
                    {projects.slice(0, 3).map((project, pot) => (
                      <div className="grid" key={pot}>
                        <div className="wpo-project-item">
                          <div className="wpo-project-img">
                            <img src={project.projectImage} alt="" />
                            <div className="left-border"></div>
                            <div className="right-border"></div>
                          </div>
                          <div className="wpo-project-text">
                            <h2>
                              <Link
                                to={{
                                  pathname: `/project/project-single/${project.projectId}`,
                                }}
                                onClick={ClickHandler}
                              >
                                {project.projectTitle}
                              </Link>
                            </h2>
                            <span>{project.projectTitle}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProject;
