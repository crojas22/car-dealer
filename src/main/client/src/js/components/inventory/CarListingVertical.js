import React from 'react';
import FaRoad from 'react-icons/lib/fa/road';
import MdLocalGasStation from 'react-icons/lib/md/local-gas-station';
import GoCalendar from 'react-icons/lib/go/calendar';
import MdDirectionsCar from 'react-icons/lib/md/directions-car';
import { Colmd } from "../reusables/Div";

const CarListingVertical = ({carCondition, pictureAddress, year ,carManufacturer, model, discountedPrice, price, mileage, fuelType, transmissionType, stockNumber}) => {
    return(
        <div className="car-listing-vertical row mt-5 position-relative">
            <div className="col-md-4 mt-1 mb-4">
                <img className="img-fluid" src={pictureAddress} alt="car"/>
            </div>
            <div className="col-md-8 pl-md-0">
                <div className="d-flex justify-content-between">
                    <div >
                        <a>
                            <h4>{` ${carManufacturer} ${model}`}</h4>
                        </a>
                    </div>
                    <div className="price mt-1">
                        <span>{`$${price}`}</span>
                        <span>{`$${discountedPrice}`}</span>
                    </div>
                </div>
                <div className="car-info row d-md-flex my-md-4 mx-md-2 justify-content-md-between">
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
                            <span>Year</span>
                        </div>
                        <div>{year}</div>
                    </Colmd>
                    <Colmd>
                        <div>
                            <MdDirectionsCar/>
                            <span>Transmission</span>
                        </div>
                        <div>{transmissionType}</div>
                    </Colmd>
                </div>
                <ul className="car-links p-0 my-4 d-sm-flex">
                    <li className="bg-light">
                        <div>
                            <span>stock# </span> {stockNumber}
                        </div>
                    </li>
                    <li>
                        <a>
                            <GoCalendar/> Schedule a test drive
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default CarListingVertical;