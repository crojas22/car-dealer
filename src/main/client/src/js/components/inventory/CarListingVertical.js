import React from 'react';
import { Link } from "react-router-dom";
import FaRoad from 'react-icons/lib/fa/road';
import MdLocalGasStation from 'react-icons/lib/md/local-gas-station';
import GoCalendar from 'react-icons/lib/go/calendar';
import MdDirectionsCar from 'react-icons/lib/md/directions-car';
import { Colmd } from "../reusables/Div";
import { RenderCarInfoLinks } from "../reusables/RenderLinks";
import FullPageModal from "../reusables/FullPageModal";
import TestDrive from "./TestDrive";

const CarListingVertical = ({id, carCondition, pictureAddress, year ,carManufacturer, model, discountedPrice, price, mileage, fuelType, transmissionType}) => (
    <div className="car-listing-vertical row mt-4 position-relative">
        <Link to={`/inventory/${id}`} className="col-md-4 mt-1 mb-4">
            <img className="img-fluid w-100" src={pictureAddress} alt="car"/>
        </Link>
        <div className="col-md-8 pl-md-0">
            <div className="d-flex justify-content-between">
                <div >
                    <Link to={`/inventory/${id}`}>
                        <h4>{`${year} ${carManufacturer} ${model}`}</h4>
                    </Link>
                </div>
                <div className="price mt-1">
                    <span>{`$${discountedPrice}`}</span>
                    <span>{`$${price}`}</span>
                </div>
            </div>
            <div className="car-info row d-md-flex my-md-3 mx-md-2 justify-content-md-between">
                <Colmd >
                    <div>
                        <FaRoad/>
                        <span>Miles</span>
                    </div>
                    <div>{mileage}</div>
                </Colmd>
                <Colmd>
                    <div>
                        <MdLocalGasStation/>
                        <span>Type</span>
                    </div>
                    <div>{fuelType}</div>
                </Colmd>
                <Colmd>
                    <div>
                        <GoCalendar/>
                        <span>Condition</span>
                    </div>
                    <div>{carCondition}</div>
                </Colmd>
                <Colmd>
                    <div>
                        <MdDirectionsCar/>
                        <span>Transmission</span>
                    </div>
                    <div>{transmissionType}</div>
                </Colmd>
            </div>
            <FullPageModal info={`${year} ${carManufacturer} ${model}`} id={id}
                           InnerComponent={TestDrive} TriggerComponent={RenderCarInfoLinks}/>
        </div>
    </div>
);

export default CarListingVertical;