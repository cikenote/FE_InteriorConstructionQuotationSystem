import React from "react";
import ContactForm from "../ContactFrom";
import "../../styles/pages/contactPage.scss";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Contactpage = () => {
    return (
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <LocationCityIcon></LocationCityIcon>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p>
                                                ô E2a-7, Đường D1, Đ. D1, Long
                                                Thạnh Mỹ, Thành Phố Thủ Đức
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <MailIcon></MailIcon>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p>fpt@gmail.com</p>
                                            <p>admin@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <LocalPhoneIcon></LocalPhoneIcon>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>+1 800 123 456 789</p>
                                            <p>+1 800 123 654 987</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>
                                It is a long established fact that a reader will
                                be distracted content of a page when looking.
                            </p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactpage;
