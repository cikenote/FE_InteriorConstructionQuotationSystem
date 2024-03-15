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
                                            <h2>Địa chỉ</h2>
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
                                            <h2>Email</h2>
                                            <p>admin@gmail.com</p>
                                            <p>interiorquotation@gmail.com</p>
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
                                            <h2>Liên hệ</h2>
                                            <p> +84 28 7300 5588</p>
                                            <p> +84 28 6868 6868</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Yêu cầu tư vấn</h2>
                            <p>
                                Cùng Interior Quotation trải nghiệm thiết kế thi
                                công nội thất hoàn hảo tiện nghi và hiện đại.
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
