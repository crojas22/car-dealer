import React from 'react';
import { BtnInput, BtnLink } from "./Buttons";
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import FaChevronRight from 'react-icons/lib/fa/chevron-right';

export const NavControls = ({add, remove}) => {
    return(
        <div className="nav-controls">
            <div className="text-center mt-4">
                <BtnInput onClick={remove} title={<FaChevronLeft size={20}/>}/>
                <div className="dots">
                    <div className="dot">
                        <span></span>
                    </div>
                </div>
                <BtnInput onClick={add} title={<FaChevronRight size={20}/>}/>
            </div>
        </div>
    )
};

export const InventoryNavigation = ({links, fetch}) => {
    const navLinks = [];
    if ("prev" in links) navLinks.push(
        <BtnInput key="prev" title={<FaChevronLeft/>} onClick={() => fetch(links.prev.href, "GET")}
                  classes="btn-outline-primary"/>
    );
    if ("next" in links) navLinks.push(
        <BtnInput key="next" title={<FaChevronRight/>} onClick={() => fetch(links.next.href, "GET")}
                 classes="btn-outline-primary"/>
    );

    return(
        <div>
            {
                navLinks
            }
        </div>
    )
};