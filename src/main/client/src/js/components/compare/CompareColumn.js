import React from 'react';
import { TrTd } from "../reusables/Div";
import CompareTop from "./CompareTop";
import { renderFeatures } from "../../functions/HelperFunctions";

const CompareColumn = props => (
    <div className="compare-column col-sm-3 col-md-3">
        <CompareTop {...props} classes="d-block d-sm-none"/>
        <table className="mb-0 table">
            <tbody>
                <TrTd title="MAKE" value={props.carManufacturer}/>
                <TrTd title="MODEL" value={props.model}/>
                <TrTd title="BODY" value={props.bodyType}/>
                <TrTd title="YEAR" value={props.year}/>
                <TrTd title="FUEL TYPE" value={props.fuelType}/>
                <TrTd title="TRANSMISSION" value={props.transmissionType}/>
                <TrTd title="DRIVE" value={props.wheelDrive}/>
                <TrTd title="EXTERIOR COLOR" value={props.exteriorColor}/>
                <TrTd title="INTERIOR COLOR	" value={props.interiorColor}/>
                <TrTd title="MILEAGE" value={props.mileage}/>
                <TrTd title="VIN" value={props.vinNumber}/>
            </tbody>
        </table>
        {
            renderFeatures(props.features, "d-flex flex-wrap d-sm-block border-top pt-2", "mb-2 mr-3 mr-sm-0")
        }
    </div>
);

export default CompareColumn;