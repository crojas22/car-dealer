import React from 'react';
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
    return(
        <div className="footer container-fluid bg-black px-lg-5">
            <div className="row">
                <div className="col-sm-4 p-4">
                    <h6>SALES HOURS</h6>
                    <div>
                        <span>Monday - Friday: </span>
                        9:00AM - 9:00PM
                        <br/>
                        <span>Saturday: </span>
                        9:00AM - 7:00PM
                        <br/>
                        <span>Sunday: </span>
                        Closed
                        <br/>
                    </div>
                </div>
                <div className="col-sm-4 p-4">
                    <h6>SERVICE HOURS</h6>
                    <div>
                        <span>Monday - Friday: </span>
                        9:00AM - 9:00PM
                        <br/>
                        <span>Saturday: </span>
                        9:00AM - 5:00PM
                        <br/>
                        <span>Sunday: </span>
                        Closed
                        <br/>
                    </div>
                </div>
                <div className="col-sm-4 p-4">
                    <h6>SOCIAL NETWORK</h6>
                    <SocialMediaLinks size={35} />
                </div>
            </div>
        </div>
    )
};

export default Footer;