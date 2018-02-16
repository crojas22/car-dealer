import React from 'react';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';

const PhoneContactInfo = ({classes}) => (
    <div className={"phone my-1 " + classes}>
        <FaPhoneSquare size={32} />
        <div className="d-inline-block ml-1">
            <span>
                Sales: 888-694-5544
            </span>
        </div>
    </div>
);

export default PhoneContactInfo;