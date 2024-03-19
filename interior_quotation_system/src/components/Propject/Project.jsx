import { useState, useEffect } from "react";
import "../../styles/components/project.scss"
import { Link } from "react-router-dom"
import projectsAPI from "../../api/projects/index";
import Error from "../Error/Error";
const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await projectsAPI.getListProjects(1);
                console.log("Response: " + response.data);
                setProjects(response.data);
            } catch (err) {
                console.log("Error fetching: ", err)
            }
        }
        fetchAPI();
        console.log("Project: ", projects);
    }, [])
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="wpo-project-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="wpo-section-title">
                        <span>Featured Works</span>
                        <h2>Our Projects</h2>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="wpo-project-wrap">
                        <div className="sortable-gallery">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-grids gallery-container clearfix">
                                        {projects && projects.length > 0 ? (
                                            projects.map((project) => (
                                                <div className="grid" key={project.id}>
                                                    <div className="wpo-project-item">
                                                        <div className="wpo-project-img">
                                                            <img src={project.img} alt="" />
                                                            <div className="left-border"></div>
                                                            <div className="right-border"></div>
                                                        </div>
                                                        <div className="wpo-project-text">
                                                            <h2><Link to={`project-single`} onClick={ClickHandler}>{project.projectTitle}</Link></h2>
                                                            <span>{project.projectDescription}</span>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Project