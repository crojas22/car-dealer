import React from 'react';
import FaChevronDown from "react-icons/lib/fa/chevron-down";
import FaChevronUp from "react-icons/lib/fa/chevron-up";

export const DivUPDown = ({clickHandle, title, active}) => (
    <div className="bg-light p-2 border title" onClick={clickHandle}>
        <div>
            {
                title
            }
        </div>
        <div>
            {
                active ? <FaChevronUp/> : <FaChevronDown/>
            }
        </div>
    </div>
);