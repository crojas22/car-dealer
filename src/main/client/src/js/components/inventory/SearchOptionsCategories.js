import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchData, getData, searchOptionStatus } from "../../actions";
import { ADD_TO_URL, REMOVE_FROM_URL } from "../../types/actionTypes";
import { fetchDataFunction } from "../../functions/HelperFunctions";
import { DivUPDown } from "./InventoryReusables";


const SearchOptionsCategories = ({selected, counter, search, searchOptionStatus, active, option, title, url, getData, fetchData, selectedType, classes, index, sort}) => {

    const onClickHandle = (e, variable) => {
        if (!selected && !url.join("").includes(variable)) {
            let uri = [...url];
            uri[index] = `${variable}=${e.target.innerHTML}&`;
            getData(uri, ADD_TO_URL);
            searchOptionStatus(true, selectedType);
            fetchDataFunction(uri, sort.sortBy, sort.direction, fetchData);
        }
    };

    const displayInfo = (object={}, variable, classes) => {
        const obj = object[variable] ? object[variable] : {};
        return Object.keys(obj).map((each, index) => {
            return(
                <div key={index} className={classes}>
                    <span onClick={e => onClickHandle(e,variable)}>
                        {
                            each
                        }
                    </span>
                    <span className="badge badge-secondary rounded-0">
                        {
                            obj[each]
                        }
                    </span>
                </div>
            )
        })
    };

    return(
        <div className={classes}>
            {
                selected ?
                    <div className="bg-grey px-2 p-2 border" onClick={() => {
                        let uri = [...url];
                        uri.splice(index, 1);
                        getData(uri, REMOVE_FROM_URL);
                        searchOptionStatus(false, selectedType);
                        fetchDataFunction(uri, sort.sortBy, sort.direction, fetchData);
                    }}>
                        {
                            displayInfo(counter, search ,"selected")
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
                                            displayInfo(counter, search ,"not-selected")
                                        }
                                    </div> : null
                            }
                        </div>
                    </div>
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        url: state.inventorySearchURL,
        sort: state.inventorySortInfo
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