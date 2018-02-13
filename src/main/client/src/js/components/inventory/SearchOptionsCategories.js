import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import FaChevronDown from "react-icons/lib/fa/chevron-down";
import FaChevronUp from "react-icons/lib/fa/chevron-up";
import { fetchData, getData, searchOptionStatus } from "../../actions";
import { ADD_TO_URL } from "../../types/actionTypes";
import { fetchDataFunction } from "../../functions/HelperFunctions";


const SearchOptionsCategories = ({selected, counter, search, searchOptionStatus, active, option, title, url, getData, fetchData, selectedType}) => {

    const onClickHandle = (e, variable) => {
        let uri = [...url];
        if (!selected && !url.join("").includes(variable)) {
            uri.push(`${variable}=${e.target.innerHTML}&`);
            getData({address: `${variable}=${e.target.innerHTML}&`}, ADD_TO_URL);
            fetchDataFunction(uri, "year", "desc", fetchData);
        }
    };

    const displayInfo = (object={}, variable, classes) => {
        const obj = object[variable] ? object[variable] : {};
        return Object.keys(obj).map((each, index) => {
            return(
                <div key={index} className={classes}>
                    <span onClick={e => {
                        onClickHandle(e,variable);
                        searchOptionStatus(true, selectedType);}}>
                        {
                            each
                        }
                        </span>
                    <span className="badge badge-dark rounded-0">
                        {
                            obj[each]
                        }
                    </span>
                </div>
            )
        })
    };

    return(
        <div className="col-md-6 col-sm-6 col-lg-12 mb-2">
            {
                selected ?
                    <div className="bg-light px-2 p-2 border">
                        {
                            displayInfo(counter, search ,"selected")
                        }
                    </div>
                    :
                    <div>
                        <div className="bg-light p-2 border title"
                             onClick={() => searchOptionStatus(!active, option)}>
                            <div className="">
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
                            <div className="px-2 border border-top-0">
                                {
                                    active ? displayInfo(counter, search ,"not-selected") : null
                                }
                            </div>
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