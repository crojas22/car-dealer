import React from 'react';
import CarListing from "../reusables/CarListing";
import { renderElements } from "../../functions/HelperFunctions";

const RenderCarListing = ({currentTab}) => {

    const elementToAdd =
        <CarListing engine="Automatic "
                    carModel="BMW 535i 2016" price="$45 000" mainClass="home-listing" gas="67/56 "
                    imgSource="/images/bmw.jpeg"/>;

    return(
        <div className="row">
            {
                currentTab === "New Cars" ? renderElements(8, elementToAdd, "col-xl-3 col-md-4 col-sm-6 mt-3") :
                    currentTab === "Used Cars" ? renderElements(6, elementToAdd, "col-xl-3 col-md-4 col-sm-6 mt-3") :
                        currentTab === "Search Inventory" ? renderElements(4, elementToAdd, "col-xl-3 col-md-4 col-sm-6 mt-3") :
                            null
            }
        </div>
    )
};

export default RenderCarListing;