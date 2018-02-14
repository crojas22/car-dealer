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
                          classes={"btn-" + (pageNumber === (i + 1) ? "primary" : "light border")}/>
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
                            {
                                renderLinks()
                            }
                        </div>
                    </ul>
                    : null
            }
        </nav>
    )
};

export default PaginationLinks;