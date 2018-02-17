import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import MdDirectionsCar from 'react-icons/lib/md/directions-car';
import FaRotateLeft from 'react-icons/lib/fa/rotate-left';
import { BtnInput } from "../reusables/Buttons";
import {
    OPTION1, OPTION1SELECTED, OPTION2, OPTION2SELECTED, OPTION3, OPTION3SELECTED, OPTION4,
    OPTION4SELECTED
} from "../../types/actionTypes";
import SearchOptionsCategories from "../inventory/SearchOptionsCategories";
import { getCounter, resetFunction } from "../../functions/HelperFunctions";
import { fetchData, resetData } from "../../actions";
import CallBanner from "./CallBanner";

const SearchInventory = ({inventory, selected, status, history, resetData, url, fetchData, sort}) => {

    const counter = getCounter(inventory);

    return(
        <div className="container-fluid my-4 search-inventory">
            <h2 className="mb-3"><MdDirectionsCar />Quick Search</h2>
            <form>
                <div className="form-row">
                    <SearchOptionsCategories title="Make" search="carManufacturer" selected={selected.option1}
                                             selectedType={OPTION1SELECTED} classes="col-md-6 col-lg-3 mb-3"
                                             counter={counter} active={status.option1} option={OPTION1} index={1}/>

                    <SearchOptionsCategories title="Model" search="model" classes="col-md-6 col-lg-3 mb-3"
                                             selectedType={OPTION3SELECTED} selected={selected.option3}
                                             counter={counter} active={status.option3} option={OPTION3} index={3}/>

                    <SearchOptionsCategories title="Condition" search="carCondition" classes="col-md-6 col-lg-3 mb-3"
                                             selectedType={OPTION2SELECTED} selected={selected.option2} index={2}
                                             counter={counter} active={status.option2} option={OPTION2}/>

                    <SearchOptionsCategories title="Year" search="year" classes="col-md-6 col-lg-3 mb-3"
                                             selectedType={OPTION4SELECTED} selected={selected.option4} index={4}
                                             counter={counter} active={status.option4} option={OPTION4}/>
                </div>
                <BtnInput title="Search" classes="btn btn-primary mt-1 mr-3" onClick={() => {
                    if (selected.option1 || selected.option3 || selected.option2 || selected.option4) {
                        history.push("/inventory");
                        window.scrollTo(0,0);
                    }
                }}/>
                <BtnInput title={<div><FaRotateLeft size={20}/> Reset All</div>} classes="btn-light mt-1 border"
                          onClick={() => resetFunction(url, sort, resetData, fetchData)}/>
            </form>
            <CallBanner />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        url: state.inventorySearchURL,
        inventory: state.wholeInventoryData,
        status: state.inventoryUI,
        selected: state.inventoryUISelected,
        sort: state.inventorySortInfo
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        resetData,
        fetchData
    }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchInventory));