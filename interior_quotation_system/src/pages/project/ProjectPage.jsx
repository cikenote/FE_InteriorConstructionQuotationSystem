import { Fragment } from 'react';
import Navbar from "../../components/Navbar/Navbar"
import PageTitle from '../../components/PageTitle/PageTitle';
const ProjectPage = () => {
    return (
        <Fragment>
            <Navbar></Navbar>
            <PageTitle pageTitle={'Projects'} pagesub={'Projects'}></PageTitle>
        </Fragment>
    )
}

export default ProjectPage