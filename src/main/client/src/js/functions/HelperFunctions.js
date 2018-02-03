import React from 'react';
import CarListing from "../components/reusables/CarListing";
import CarListingVertical from "../components/inventory/CarListingVertical";

export const renderCarListing = (array, classes, mainClass) => {
    return array.map(each => (
        <div key={each.id} className={classes}>
            <CarListing {...each} mainClass={mainClass}/>
        </div>
    ))
};

export const renderVerticalListing = (array) => {
    return array.map((each, index) => (
        <CarListingVertical key={index} {...each}/>
    ))
};