import { Fragment } from "react";
import Contactpage from "../../components/Contactpage/Contact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/PageTitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import "../../styles/pages/contactPage.scss";
import Logo from "/public/images/logo.svg";
const ContactPage = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle pageTitle={"Tư vấn"} pagesub={"Tư vấn"} />
      <Contactpage />
      <Footer ftClass={"wpo-site-footer-s2"} />
      <Scrollbar />
    </Fragment>
  );
};
export default ContactPage;
