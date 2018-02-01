import React from 'react';
import { BtnLink } from "./Buttons";

const RenderLinks = ({links, classUL, classA, clickHandle, active}) => {

    const renderLinks = links.map((each, index) => (
        <BtnLink to={each.toLowerCase()} title={each} key={index} onClick={clickHandle}
                  classes={"p-3 "+  (active === each ? "active" : "") + classA } />
    ));

    return(
        <ul className={classUL}>
            {
                renderLinks
            }
        </ul>
    )
};

export default RenderLinks;