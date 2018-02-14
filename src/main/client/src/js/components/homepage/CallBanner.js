import React from 'react';
import MdPermPhoneMsg from 'react-icons/lib/md/perm-phone-msg';
import FaQuestionCircle from "react-icons/lib/fa/question-circle"

const CallBanner = () => (
    <div className="call-banner mt-4 row">
        <div className="text-center">
            <FaQuestionCircle/> Have a Question? Call Today!
        </div>
        <div className="text-center ml-sm-2">
            <MdPermPhoneMsg/> 888-694-5544
        </div>
    </div>
);

export default CallBanner;