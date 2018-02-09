import React from 'react';
import { renderCarListing } from "../../functions/HelperFunctions";
import SearchInventory from "./SearchInventory";

const RenderCarListing = ({currentTab, newCars, usedCars}) => {

    return(
        <div className="row">
            {
                currentTab === "New Cars" ? renderCarListing(newCars, "col-xl-3 col-md-4 col-sm-6 my-3", "home-listing") :
                    currentTab === "Used Cars" ? renderCarListing(usedCars, "col-xl-3 col-md-4 col-sm-6 my-3", "home-listing") :
                        currentTab === "Search Inventory" ? <SearchInventory/> : null
            }
        </div>
    )
};

export default RenderCarListing;