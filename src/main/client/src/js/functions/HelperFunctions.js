import React from 'react';
import CarListing from "../components/reusables/CarListing";
import CarListingVertical from "../components/inventory/CarListingVertical";
import { BtnInput } from "../components/reusables/Buttons";
import FaCheckCircle from "react-icons/lib/fa/check-circle";
import { GET_INVENTORY_DATA } from "../types/actionTypes";

export const renderCarListing = (array, classes, mainClass) => (
    array.map((each, index) => (
        <div key={index} className={classes}>
            <CarListing {...each} mainClass={mainClass}/>
        </div>
    ))
);

export const renderVerticalListing = (array=[]) => array.map((each, index) => <CarListingVertical key={index} {...each}/>);

export const renderNavLinks = (array=[], object={}, func, uri) => array
    .filter(each => each in object)
    .map(each => <BtnInput key={each} classes="btn-primary" title={each} onClick={() => {
        let url = object[each].href;
        if (uri.length > 1) url += `&${uri.slice(1).join("")}`;

        func(url, "GET", "GET_INVENTORY_DATA");
        window.scrollTo(0,0);
    }}/>);

export const renderFeatures = (array=[]) => (
    <div className="row flex-wrap">
        {
            array.map((each, index) => <div key={index} className="col-sm-4 px-0 pt-2"><FaCheckCircle/>{each.description}</div>)
        }
    </div>
);


// Will return object with the count of array
export const getCounter = (array=[]) => {
    let result = {};
    array.forEach(each => {
        Object.keys(each).forEach(key => {
            if (!(key in result && !(each[key] instanceof Array) && !(each[key] instanceof Object))) {
                result[key] = {};
                if (!(each[key] in result[key])) {
                    result[key][each[key]] = 1;
                }
            } else if (!(each[key] in result[key])) {
                result[key][each[key]] = 1;
            } else if (each[key] in result[key]) {
                result[key][each[key]] = result[key][each[key]]+1
            }
        })
    });
    return result;
};

export const fetchDataFunction = (array=[], variable, direction, func) => {
    func(array.concat(`page=0&size=500&sort=${variable},${direction}&`).join(""), "GET", GET_INVENTORY_DATA);
};

