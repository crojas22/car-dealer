import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import MdDirectionsCar from 'react-icons/lib/md/directions-car';
import { BtnInput } from "../reusables/Buttons";
import SearchOptionsCategories from "./SearchOptionsCategories";
import { fetchDataFunction, getCounter } from "../../functions/HelperFunctions";
import { fetchData, resetData, searchOptionStatus } from "../../actions";
import {
    OPTION1, OPTION1SELECTED, OPTION2, OPTION2SELECTED, OPTION3, OPTION3SELECTED, OPTION4, OPTION4SELECTED, OPTION5,
    OPTION5SELECTED, RESET_OPTIONS, RESET_SELECTED,
    RESET_URL
} from "../../types/actionTypes";

const SearchOptions = ({array, resetData, fetchData, url, status, selected}) => {

    const counter = getCounter(array);

    return(
        <form >
            <div className="p-4 mb-2 text-center">
                <h5><MdDirectionsCar size={30}/>Search Options</h5>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <SearchOptionsCategories title="Make" search="carManufacturer" selected={selected.option1}
                                             selectedType={OPTION1SELECTED}
                                             counter={counter} active={status.option1} option={OPTION1}/>

                    <SearchOptionsCategories title="Condition" search="carCondition"
                                             selectedType={OPTION2SELECTED} selected={selected.option2}
                                             counter={counter} active={status.option2} option={OPTION2}/>

                    <SearchOptionsCategories title="Model" search="model"
                                             selectedType={OPTION3SELECTED} selected={selected.option3}
                                             counter={counter} active={status.option3} option={OPTION3}/>

                    <SearchOptionsCategories title="Year" search="year"
                                             selectedType={OPTION4SELECTED} selected={selected.option4}
                                             counter={counter} active={status.option4} option={OPTION4}/>

                    <SearchOptionsCategories title="Body type" search="bodyType"
                                             selectedType={OPTION5SELECTED} selected={selected.option5}
                                             counter={counter} active={status.option5} option={OPTION5}/>
                </div>
            </div>
            <BtnInput title="Reset" classes="btn-primary m-3"
                      onClick={() => {
                          let uri = [...url];
                          resetData(RESET_URL);
                          resetData(RESET_SELECTED);
                          resetData(RESET_OPTIONS);
                          fetchDataFunction(uri.splice(0,1), "year", "desc", fetchData)
                      }}/>
        </form>
    )
};

const mapStateToProps = state => {
    return {
        url: state.inventorySearchURL,
        status: state.inventoryUI,
        selected: state.inventoryUISelected
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        resetData,
        fetchData,
        searchOptionStatus
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptions);