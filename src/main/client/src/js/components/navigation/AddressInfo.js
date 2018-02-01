import React from 'react';
import FaMapMarker from 'react-icons/lib/fa/map-marker';

const AddressInfo = ({classes}) => (
    <div className={"mr-3 " + classes}>
        <FaMapMarker size={32} style={{verticalAlign: "none"}}/>
        <div className="d-inline-block ml-1">
            <span className="d-md-block">
                15033 NW 30th ST
            </span>
            <span>
                Miami, FL 33134
            </span>
        </div>
    </div>
);

export default AddressInfo;