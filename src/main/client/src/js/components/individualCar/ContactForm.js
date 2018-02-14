import React from 'react';
import FaEnvelopeO from "react-icons/lib/fa/envelope-o";
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import FaPaperPlaneO from 'react-icons/lib/fa/paper-plane-o';
import { InputLabel } from "../reusables/Form";
import { BtnSubmit } from "../reusables/Buttons";

const ContactForm = ({info}) => {
    return(
        <div className="contact-form row py-2">
            <ContactInfo />
            <form className="col-md-7 pl-3 pl-md-4 pr-3 py-3">
                <h4>
                    <FaPaperPlaneO/> Message to Vendor
                </h4>
                <InputLabel _for="name" title="Your Name:"/>

                <InputLabel _for="phone" title="Your Contact Phone Number:" type="tel"/>

                <InputLabel _for="email" title="Email:" type="email"/>

                <div className="form-group">
                    <label htmlFor="message">
                        Your Message:
                    </label>
                    <textarea className="form-control rounded-0 bg-light" name="message" id="message" rows="5"
                              defaultValue={`I am interested in a price quote on this vehicle ${info.year} ${info.carManufacturer} ${info.model} stock # ${info.stockNumber}. Please contact me at your earliest convenience with your best price for this vehicle.`}/>
                </div>
                <BtnSubmit title="Submit" classes="btn-primary"/>
            </form>
        </div>
    )
};

const ContactInfo = () => (
    <div className="col-md-5 px-3 py-3 pb-3">
        <div>
            <h4>
                <FaEnvelopeO/>
                Contact Information
            </h4>
            <p>
                <FaMapMarker size={20}/>
                15033 NW 30th St Miami, FL 33134
            </p>
            <p>
                <FaPhoneSquare size={20}/>
                <span>
                    Phone:
                </span> 888-694-5544
            </p>
            <p>
                <FaEnvelopeO size={20}/>
                <span>
                    Email:
                </span> <a href="mailto:rep1@sales.com">rep1@sales.com</a>
            </p>
        </div>
    </div>
);

export default ContactForm;