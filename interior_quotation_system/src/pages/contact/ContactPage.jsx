import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/PageTitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contact'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/Footer/Footer';
import Logo from '/public/images/logo.svg'
import "../../styles/pages/contactPage.scss"
const ContactPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/> 
            <Contactpage/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

