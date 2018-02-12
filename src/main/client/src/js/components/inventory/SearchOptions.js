import React from 'react';
import MdDirectionsCar from 'react-icons/lib/md/directions-car';
import { BtnSubmit } from "../reusables/Buttons";
import SearchOptionsCategories from "./SearchOptionsCategories";
import { getCounter } from "../../functions/HelperFunctions";

const SearchOptions = ({array}) => {

    const counter = getCounter(array);

    return(
        <form >
            <div className="p-4 mb-2 text-center">
                <h5><MdDirectionsCar size={30}/>Search Options</h5>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <SearchOptionsCategories title="Make" search="carManufacturer" active={true} counter={counter}/>

                    <SearchOptionsCategories title="Condition" search="carCondition" counter={counter}/>

                    <SearchOptionsCategories title="Model" search="model" counter={counter}/>

                    <SearchOptionsCategories title="Year" search="year" counter={counter}/>

                    <SearchOptionsCategories title="Body type" search="bodyType" counter={counter}/>
                </div>
            </div>
            <BtnSubmit title="Search" classes="btn-primary m-3"/>
        </form>
    )
};

export default SearchOptions;