import React from 'react';
import { connect } from "react-redux";
import { RenderBreadcrumps } from "./reusables/RenderLinks";
import CompareColumn from "./compare/CompareColumn";
import CompareTop from "./compare/CompareTop";

const Compare = ({compareArray}) => {
    const renderEmpty = (Component) => {
        let i = 0,
            length = 3 - compareArray.length,
            result = [];
        for (i; i < length; i++) {
            result.push(
                <Component key={i}/>
            )
        }
        return result;
    };

    const renderEmptyTop = Component => {
        let i = 0,
            length = 3 - compareArray.length,
            result = [];
        for (i; i < length; i++) {
            result.push(
                <div key={i} className="col-sm-3 col-md-3">
                    <Component classes="d-none d-sm-block"/>
                </div>
            )
        }
        return result;
    };

    return(
        <div className="compare container-fluid px-md-5">
            <RenderBreadcrumps title="Compare"/>
            <div className="row">
                <div className="col-sm-3 col-md-3 d-none d-sm-flex align-items-sm-center">
                    <h5>
                        COMPARE
                        <br/>
                        VEHICLES
                    </h5>
                </div>
                {
                    compareArray.map(each => (
                        <div key={each.id} className="col-sm-3 col-md-3">
                            <CompareTop {...each} classes="compare-column d-none d-sm-block"/>
                        </div>
                    ))
                }
                {
                    renderEmptyTop(CompareTop)
                }
            </div>
            <div className="row">
                <CompareInfo
                    array={["MAKE", "MODEL", "BODY", "YEAR", "FUEL TYPE", "TRANSMISSION", "DRIVE", "EXTERIOR COLOR", "INTERIOR COLOR", "MILEAGE", "VIN"]}/>
                {
                    compareArray.map(each => <CompareColumn key={each.id} {...each} />)
                }
                {
                    renderEmpty(CompareColumn)
                }
            </div>
        </div>
    )
};

const CompareInfo = ({array}) => (
    <div className="col-sm-3 col-md-3 d-none d-sm-block">
        <table className="mb-2 table">
            <tbody>
            {
                array.map(each => (
                    <tr key={each}>
                        <td>
                            {
                                each
                            }
                        </td>
                    </tr>
                ))
            }
            <tr>
                <td>
                    <h6>
                        FEATURES
                    </h6>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
);

const mapStateToProps = state => {
    return {
        compareArray: state.compareVehicles
    }
};

export default connect(mapStateToProps)(Compare);