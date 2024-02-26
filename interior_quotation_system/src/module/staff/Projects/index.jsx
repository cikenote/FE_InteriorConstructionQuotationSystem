import React, { useRef } from "react";
import TableLayout from "../../../layouts/TableLayout";
import { PROJECT_COLUMNS, PROJECT_DATA_SOURCE } from "./constant";
import ProjectModal from "./ProjectModal";

const StaffProjects = () => {
  const projectActionModal = useRef();

  const searchStaffProject = (event) => {};

  return (
    <>
      <ProjectModal ref={projectActionModal} />

      <TableLayout
        tableColumns={PROJECT_COLUMNS}
        tableDataSource={PROJECT_DATA_SOURCE}
        actionName={"New Project"}
        onchangeSearch={searchStaffProject}
        addNewAction={() => projectActionModal.current.openModal()}
      />
    </>
  );
};

export default StaffProjects;
