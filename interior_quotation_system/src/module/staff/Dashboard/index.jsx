import React, { useEffect, useRef, useState } from "react";
import TableLayout from "../../../layouts/TableLayout";
import { PROJECT_COLUMNS, PROJECT_DATA_SOURCE } from "./constant";
import ProjectModal from "./ProjectModal";
import "./style.scss"
import RegisterPage from './../../../pages/register/RegisterPage';
import axios from "axios";
const StaffProjects = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [users, setUsers] = useState([]);
  const [contracts, setContracts] = useState([]);

  const projectActionModal = useRef();

  const searchStaffProject = (event) => { };

  const fetchGetNumberProducts = async () => {
    const response = await axios.get("https://swp391api.developvn.click/api/Dashboard/GetNumberProducts");
    setProducts(response.data)
  }

  const fetchGetNumberCategory = async () => {
    const response = await axios.get("https://swp391api.developvn.click/api/Dashboard/GetNumberCategory");
    setCategory(response.data)
  }

  const fetchGetNumberUsers = async () => {
    const response = await axios.get("https://swp391api.developvn.click/api/Dashboard/GetNumberUser");
    setUsers(response.data)
  }
  
  const fetchGetNumberContract = async () => {
    const response = await axios.get("https://swp391api.developvn.click/api/Dashboard/GetNumberContract");
    setContracts(response.data)
  }

  useEffect(() => {
    fetchGetNumberProducts();
    fetchGetNumberCategory();
    fetchGetNumberUsers();
    fetchGetNumberContract();
  }, [])
  return (
    <>
      <ProjectModal ref={projectActionModal} />
      <div className="content-dashboard">
        <div className="row">
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-primary o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-comments"></i>
                </div>
                <div className="mr-5">{products} Products</div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-warning o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-list"></i>
                </div>
                <div className="mr-5">{category} Category</div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-success o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-shopping-cart"></i>
                </div>
                <div className="mr-5">{users} Users</div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-danger o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-support"></i>
                </div>
                <div className="mr-5">{contracts} New Tickets!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffProjects;
