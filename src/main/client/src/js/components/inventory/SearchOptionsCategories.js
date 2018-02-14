import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import FaChevronDown from "react-icons/lib/fa/chevron-down";
import FaChevronUp from "react-icons/lib/fa/chevron-up";
import { fetchData, getData, searchOptionStatus } from "../../actions";
import { ADD_TO_URL } from "../../types/actionTypes";
import { fetchDataFunction } from "../../functions/HelperFunctions";


const SearchOptionsCategories = ({selected, counter, search, searchOptionStatus, active, option, title, url, getData, fetchData, selectedType, classes, index}) => {

    const onClickHandle = (e, variable) => {
        let uri = [...url];
        if (!selected && !url.join("").includes(variable)) {
            uri[index] = `${variable}=${e.target.innerHTML}&`;
            getData(uri, ADD_TO_URL);
            searchOptionStatus(true, selectedType);
            fetchDataFunction(uri, "year", "desc", fetchData);
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
                        getData(uri, "REMOVE_FROM_URL");
                        searchOptionStatus(false, selectedType);
                        fetchDataFunction(uri, "year", "desc", fetchData);
                    }}>
                        {
                            displayInfo(counter, search ,"selected")
                        }
                    </div>
                    :
                    <div onClick={() => searchOptionStatus(!active, option)}>
                        <div className="bg-light p-2 border title">
                            <div>
                                {
                                    title
                                }
                            </div>
                            <div>
                                {
                                    active ? <FaChevronUp/> : <FaChevronDown/>
                                }
                            </div>
                        </div>
                        <div>
                            {
                                active ?
                                    <div className="px-2 pt-2 border border-top-0">
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
        url: state.inventorySearchURL
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