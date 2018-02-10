import React from 'react';
import CarListing from "../components/reusables/CarListing";
import CarListingVertical from "../components/inventory/CarListingVertical";
import { BtnInput } from "../components/reusables/Buttons";
import FaCheckCircle from "react-icons/lib/fa/check-circle";

export const renderCarListing = (array, classes, mainClass) => {
    return array.map((each, index) => (
        <div key={index} className={classes}>
            <CarListing {...each} mainClass={mainClass}/>
        </div>
    ))
};

export const renderVerticalListing = (array=[]) => array.map((each, index) => <CarListingVertical key={index} {...each}/>);

export const renderNavLinks = (array=[], object={}, func, uri) => array
    .filter(each => each in object)
    .map(each => <BtnInput key={each} classes="btn-primary" title={each} onClick={() => {
        let url = object[each].href;
        if (uri.length > 1) url += `&${uri.slice(1).join("")}`;

        func(url, "GET", "GET_INVENTORY_DATA");
        window.scrollTo(0,0);
    }}/>);

export const renderFeatures = (array=[]) => {
    return(
        <div className="row flex-wrap">
            {
                array.map((each, index) => <div key={index} className="col-sm-4 px-0 pt-2"><FaCheckCircle/>{each.description}</div>)
            }
        </div>
    )
};