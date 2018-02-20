import React from 'react';
import CarListing from "../components/reusables/CarListing";
import CarListingVertical from "../components/inventory/CarListingVertical";
import FaCheckCircle from "react-icons/lib/fa/check-circle";
import {
    ADD_MESSAGE_SNACKBAR,
    ADD_TO_URL, GET_INVENTORY_DATA, RESET_MESSAGE_SNACKBAR, RESET_OPTION_SELECTED, RESET_OPTIONS, RESET_SELECTED,
    RESET_URL
} from "../types/actionTypes";

export const renderCarListing = (array, classes, mainClass) => (
    array.map((each, index) => (
        <div key={index} className={classes}>
            <CarListing {...each} mainClass={mainClass}/>
        </div>
    ))
);

export const renderVerticalListing = (array=[]) => array.map((each, index) => <CarListingVertical key={index} {...each}/>);

export const renderFeatures = (array=[], classesA, classesB) => (
    <div className={classesA}>
        {
            array.map((each, index) => <div key={index} className={classesB}><FaCheckCircle/>{each.description}</div>)
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

export const sliceArray = (array, pageNumber, perPage) => {
    let max = pageNumber * perPage,
        min = max - perPage;
    return array.length < perPage ? array : array.slice(min, max);
};

export const displayInfo = (object={}, variable, Component, func, classes="") => {
    const obj = object[variable] ? object[variable] : {};
    return Object.keys(obj).map(each => <Component classes={classes} key={each} title={each} value={obj[each]}
                                                   click={e => func(e, variable)}/>)
};
export const clickHandleHelper = (e, variable, url, optionsSelected, index, title, selectedType, getData, ADD_OPTION_SELECTED, sort, fetchData) => {
    let uri = [...url],
        selectedOptions = [...optionsSelected];
    uri[index] = `${variable}=${e.target.innerHTML}&`;
    selectedOptions[index] = {key: title,value: e.target.innerHTML, index, selectedType};
    getData(uri, ADD_TO_URL);
    getData(selectedOptions, ADD_OPTION_SELECTED);
    fetchDataFunction(uri, sort.sortBy, sort.direction, fetchData);
};

export const resetFunction = (url, sort, resetData, fetchData) => {
    let uri = [...url];
    resetData(RESET_URL);
    resetData(RESET_SELECTED);
    resetData(RESET_OPTIONS);
    resetData(RESET_OPTION_SELECTED);
    fetchDataFunction(uri.splice(0,1), sort.sortBy, sort.direction, fetchData)
};

export const snackBarShow = (setData, message) => {
    setData({show: true, message}, ADD_MESSAGE_SNACKBAR);
    setTimeout(() => {
        setData({show:false, message: ""}, RESET_MESSAGE_SNACKBAR);
    }, 2000);
};