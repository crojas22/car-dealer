import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import FaCheckCircle from "react-icons/lib/fa/check-circle";
import { fetchData, setData } from "../../actions";
import { ADD_OPTION_SELECTED } from "../../types/actionTypes";
import { clickHandleHelper, displayInfo } from "../../functions/HelperFunctions";
import OnOff from "../../hoc/OnOff";

const AdditionalSearchOption = ({active, url, index, setData, selectedType, clickHandle, sort, fetchData, search, color, title, counter, optionsSelected}) => {

    const clickHandles = (e, variable) => {
        if (!url.join("").includes(variable)) {
            setData(e.target.innerHTML, selectedType);
            clickHandle();
            clickHandleHelper(e, variable, url, optionsSelected, index, title, selectedType, setData, ADD_OPTION_SELECTED, sort, fetchData);
        }
    };

    const style = {
        backgroundColor: color
    };

    return(
        <div className="additional-search col-md-6 col-sm-6 col-lg-12 mt-4 px-1 px-sm-2 px-lg-1">
            <div className="d-flex justify-content-between py-2 px-3 bg-light border" onClick={clickHandle}>
                <div className="d-flex">
                    {
                        title
                    }
                    {
                        url.join("").includes(search) ? <div style={style}> </div> : null
                    }
                </div>
                <div>
                    {
                        active ? <span>&#8722;</span> : "+"
                    }
                </div>
            </div>
            {
                active ?
                    <ul className="bg-grey">
                        {
                            displayInfo(counter, search, InnerComponent, clickHandles)
                        }
                    </ul>
                    :
                    null
            }
        </div>
    )
};

const InnerComponent = ({title, value, click, classes}) => (
    <li className={"pb-2 " + classes }>
        <div className="each">
            <FaCheckCircle color={title}/>
            <span onClick={click}>
                            {
                                title
                            }
                        </span>
        </div>
        <div className="badge badge-secondary rounded-0">
            {
                value
            }
        </div>
    </li>
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
        setData
    }, dispatch)
};

export default OnOff(connect(mapStateToProps, mapDispatchToProps)(AdditionalSearchOption));