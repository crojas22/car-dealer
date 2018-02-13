import React from "react";
import { BtnInput } from "../reusables/Buttons";

const PaginationLinks = ({perPage, pageNumber, arrayLength, changePage}) => {

    const totalPages = Math.ceil(arrayLength/perPage);

    const renderLinks = () => {
        let i = 0,
            array = [];

        for (i; i < totalPages; i++) {
            array.push(
                <BtnInput key={i} title={i + 1} onClick={e => changePage(e.target.innerHTML, totalPages)}
                          classes={"btn-" + (pageNumber === (i + 1) ? "dark" : "primary")}/>
            );
        }
        return array;
    };

    return(
        <nav>
            {
                arrayLength > perPage ?
                    <ul className="pagination">
                        <div>
                            <BtnInput title="<<" onClick={e => changePage(e.target.innerHTML, totalPages)}
                                      classes="btn-primary" />
                        </div>
                        <div>
                            {
                                renderLinks()
                            }
                        </div>
                        <div>
                            <BtnInput title=">>" onClick={e => changePage(e.target.innerHTML, totalPages)}
                                      classes="btn-primary"/>
                        </div>
                    </ul>
                    : null
            }
        </nav>
    )
};

export default PaginationLinks;