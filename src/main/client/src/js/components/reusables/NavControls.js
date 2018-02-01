import React from 'react';
import { BtnInput } from "./Buttons";
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import FaChevronRight from 'react-icons/lib/fa/chevron-right';

const NavControls = ({add, remove}) => {
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

export default NavControls;