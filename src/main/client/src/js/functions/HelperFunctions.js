import React from 'react';
import CarListing from "../components/reusables/CarListing";

export const renderElements = (times, element, classes) => {
    let array = [],
        i = 0;
    for (i; i < times; i++) {
        array.push(
            <div key={i} className={classes}>
                {
                    element
                }
            </div>
        )
    }
    return array
};

export const renderCarListing = (array, classes, mainClass) => {
    return array.map(each => (
        <div key={each.id} className={classes}>
            <CarListing {...each} mainClass={mainClass}/>
        </div>
    ))
};