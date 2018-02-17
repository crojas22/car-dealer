import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchData, getData, searchOptionStatus } from "../../actions";
import { ADD_OPTION_SELECTED } from "../../types/actionTypes";
import { clickHandleHelper, displayInfo } from "../../functions/HelperFunctions";
import { DivUPDown } from "./InventoryReusables";


const SearchOptionsCategories = ({selected, counter, search, searchOptionStatus, active, option, title, url, getData, fetchData, selectedType, classes, index, sort, optionsSelected}) => {

    const onClickHandle = (e, variable) => {
        if (!url.join("").includes(variable)) {
            searchOptionStatus(!active, option);
            searchOptionStatus(true, selectedType);
            clickHandleHelper(e, variable, url, optionsSelected, index, title, selectedType, getData, ADD_OPTION_SELECTED, sort, fetchData);
        }
    };

    return(
        <div className={classes}>
            {
                selected ?
                    <div className="bg-grey px-2 p-2 border" >
                        {
                            displayInfo(counter, search , InnerComponent, onClickHandle, "selected")
                        }
                    </div>
                    :
                    <div>
                        <DivUPDown clickHandle={() => searchOptionStatus(!active, option)} title={title} active={active}/>
                        <div>
                            {
                                active ?
                                    <div className="px-2 pt-2 border ">
                                        {
                                            displayInfo(counter, search , InnerComponent, onClickHandle, "not-selected")
                                        }
                                    </div> : null
                            }
                        </div>
                    </div>
            }
        </div>
    )
};

const InnerComponent = ({title, value, click, classes}) => (
    <div className={"" + classes}>
                    <span onClick={click}>
                        {
                            title
                        }
                    </span>
        <span className="badge badge-secondary rounded-0">
                        {
                            value
                        }
                    </span>
    </div>
);

const mapStateToProps = state => {
    return {
        url: state.inventorySearchURL,
        sort: state.inventorySortInfo,
        optionsSelected: state.optionsSelected
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchData,
        getData,
        searchOptionStatus
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptionsCategories);