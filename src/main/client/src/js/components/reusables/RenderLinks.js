import React from 'react';
import GoCalendar from 'react-icons/lib/go/calendar';
import { NavLink } from "react-router-dom";
import { BtnLink } from "./Buttons";

export const RenderLinks = ({links, classUL, classA, clickHandle, active}) => (
    <ul className={classUL}>
        {
            links.map((each, index) => (
                <BtnLink to={each.toLowerCase()} title={each} key={index} onClick={clickHandle}
                         classes={"p-3 font-weight-bold "+  (active === each ? "active" : "") + classA } />
            ))
        }
    </ul>
);

export const RenderBreadcrumps = ({title}) => (
    <ol className="pl-0 py-3 d-flex my-3">
        <li className="breadcrumb-item"><NavLink to="/home">Home</NavLink></li>
        <li className="breadcrumb-item"><NavLink to="/inventory">Inventory</NavLink></li>
        <li className="breadcrumb-item"><NavLink to="/">{title}</NavLink></li>
    </ol>
);

export const RenderCarInfoLinks = () => (
    <ul className="car-links p-0 mt-4 mb-3 d-sm-flex">
        <li className="bg-light">
            <span>stock# </span> 323244
        </li>
        <li>
            <a>
                <GoCalendar/> Schedule a test drive
            </a>
        </li>
    </ul>
);