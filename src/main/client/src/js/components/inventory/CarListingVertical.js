import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import FaRoad from 'react-icons/lib/fa/road';
import MdLocalGasStation from 'react-icons/lib/md/local-gas-station';
import GoCalendar from 'react-icons/lib/go/calendar';
import MdDirectionsCar from 'react-icons/lib/md/directions-car';
import { Colmd } from "../reusables/Div";
import { RenderCarInfoLinks } from "../reusables/RenderLinks";
import FullPageModal from "../reusables/FullPageModal";
import TestDrive from "./TestDrive";
import { setData } from "../../actions";

const CarListingVertical = props => (
    <div className="car-listing-vertical row mt-4 position-relative">
        <Link to={`/inventory/${props.id}`} className="col-md-4 mt-1 mb-4">
            <img className="img-fluid w-100" src={props.pictureAddress} alt="car"/>
        </Link>
        <div className="col-md-8 pl-md-0">
            <div className="d-flex justify-content-between">
                <div >
                    <Link to={`/inventory/${props.id}`}>
                        <h4>{`${props.year} ${props.carManufacturer} ${props.model}`}</h4>
                    </Link>
                </div>
                <div className="price mt-1">
                    <span>{`$${props.discountedPrice}`}</span>
                    <span>{`$${props.price}`}</span>
                </div>
            </div>
            <div className="car-info row d-md-flex my-md-3 mx-md-2 justify-content-md-between">
                <Colmd >
                    <div>
                        <FaRoad/>
                        <span>Miles</span>
                    </div>
                    <div>{props.mileage}</div>
                </Colmd>
                <Colmd>
                    <div>
                        <MdLocalGasStation/>
                        <span>Type</span>
                    </div>
                    <div>{props.fuelType}</div>
                </Colmd>
                <Colmd>
                    <div>
                        <GoCalendar/>
                        <span>Condition</span>
                    </div>
                    <div>{props.carCondition}</div>
                </Colmd>
                <Colmd>
                    <div>
                        <MdDirectionsCar/>
                        <span>Transmission</span>
                    </div>
                    <div>{props.transmissionType}</div>
                </Colmd>
            </div>
            <FullPageModal info={`${props.year} ${props.carManufacturer} ${props.model}`} carInfo={props} setData={props.setData}
                           InnerComponent={TestDrive} TriggerComponent={RenderCarInfoLinks} compare={props.compare}/>
        </div>
    </div>
);

const mapStateToProps = state => {
    return {
        compare : state.compareVehicles
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setData
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CarListingVertical);