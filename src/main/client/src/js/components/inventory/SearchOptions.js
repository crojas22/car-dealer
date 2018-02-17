import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import MdDirectionsCar from 'react-icons/lib/md/directions-car';
import FaRotateLeft from 'react-icons/lib/fa/rotate-left';
import { BtnInput } from "../reusables/Buttons";
import SearchOptionsCategories from "./SearchOptionsCategories";
import { getCounter, resetFunction } from "../../functions/HelperFunctions";
import { fetchData, resetData } from "../../actions";
import {
    OPTION1, OPTION1_COLOR, OPTION1SELECTED, OPTION2, OPTION2_COLOR, OPTION2SELECTED, OPTION3, OPTION3SELECTED, OPTION4,
    OPTION4SELECTED, OPTION5,
    OPTION5SELECTED
} from "../../types/actionTypes";
import AdditionalSearchOption from "./AdditionalSearchOption";

const SearchOptions = ({array, resetData, fetchData, url, status, selected, resetPage, sort, color}) => {

    const counter = getCounter(array);

    return(
        <div>
            <form >
                <div className="p-4 mb-2 text-center">
                    <h5><MdDirectionsCar size={30}/>Search Options</h5>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <SearchOptionsCategories title="Make" search="carManufacturer" selected={selected.option1} index={1}
                                                 selectedType={OPTION1SELECTED} classes="col-md-6 col-sm-6 col-lg-12 mb-2"
                                                 counter={counter} active={status.option1} option={OPTION1}/>

                        <SearchOptionsCategories title="Condition" search="carCondition" classes="col-md-6 col-sm-6 col-lg-12 mb-2"
                                                 selectedType={OPTION2SELECTED} selected={selected.option2} index={2}
                                                 counter={counter} active={status.option2} option={OPTION2}/>

                        <SearchOptionsCategories title="Model" search="model" classes="col-md-6 col-sm-6 col-lg-12 mb-2"
                                                 selectedType={OPTION3SELECTED} selected={selected.option3} index={3}
                                                 counter={counter} active={status.option3} option={OPTION3}/>

                        <SearchOptionsCategories title="Year" search="year" classes="col-md-6 col-sm-6 col-lg-12 mb-2"
                                                 selectedType={OPTION4SELECTED} selected={selected.option4} index={4}
                                                 counter={counter} active={status.option4} option={OPTION4}/>

                        <SearchOptionsCategories title="Body type" search="bodyType" classes="col-md-6 col-sm-6 col-lg-12 mb-2"
                                                 selectedType={OPTION5SELECTED} selected={selected.option5} index={5}
                                                 counter={counter} active={status.option5} option={OPTION5}/>
                    </div>
                </div>
                <BtnInput title={<div><FaRotateLeft size={20}/> Reset All</div>} classes="btn-light m-3 border"
                          onClick={() => {
                              resetFunction(url, sort, resetData, fetchData);
                              resetPage();
                          }}/>
            </form>
            <div className="container-fluid">
                <div className="row mb-lg-4">
                    <AdditionalSearchOption counter={counter} selectedType={OPTION1_COLOR} color={color.option1}
                                            search="exteriorColor" index={6} title="Exterior Color"/>
                    <AdditionalSearchOption counter={counter} selectedType={OPTION2_COLOR} color={color.option2}
                                            search="interiorColor" index={7} title="Interior Color"/>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        url: state.inventorySearchURL,
        status: state.inventoryUI,
        selected: state.inventoryUISelected,
        sort: state.inventorySortInfo,
        color: state.inventoryColorSelected
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        resetData,
        fetchData
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptions);