import React from 'react';
import FaEnvelopeO from "react-icons/lib/fa/envelope-o";
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import FaPaperPlaneO from 'react-icons/lib/fa/paper-plane-o';
import { InputLabel } from "../reusables/Form";
import { BtnSubmit } from "../reusables/Buttons";
import Alert from "../reusables/Alert";

const ContactForm = ({info, submit, success, showAlert, clickHandle, message}) => {
    let _name, _phone, _email, _message;

    const handleSubmit = e => {
        e.preventDefault();
        submit({
            name: _name.value,
            phone: _phone.value,
            email: _email.value,
            message: _message.value
        }, info.id);
        _name.value = "";
        _phone.value = "";
        _email.value = "";
        _message.value = "";
    };

    return(
        <div className="contact-form row py-2">
            <ContactInfo />
            <form className="col-md-7 pl-3 pl-md-4 pr-3 py-3" onSubmit={handleSubmit}>
                <h4>
                    <FaPaperPlaneO/> Message to Vendor
                </h4>
                <Alert show={showAlert} classes={"" + (success ? "success": "danger")} clickHandle={clickHandle}
                       message={message}/>
                <InputLabel _for="name" inputRef={input => _name = input} title="Your Name:"/>

                <InputLabel _for="phone" inputRef={input => _phone = input} title="Your Contact Phone Number:" type="tel"/>

                <InputLabel _for="email" inputRef={input => _email = input} title="Email:" type="email"/>

                <div className="form-group">
                    <label htmlFor="message">
                        Your Message:
                    </label>
                    <textarea className="form-control rounded-0 bg-light" name="message" id="message" rows="5" ref={input => _message = input}
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