import React from 'react';
import { Link } from "react-router-dom";
import MdDirectionsCar from 'react-icons/lib/md/directions-car';
import MdLocalGasStation from 'react-icons/lib/md/local-gas-station';

const CarListing = ({pictureAddress, model, year, price, mainClass, mpgStreet, mpgHighway, transmissionType, carManufacturer, id}) => (
    <Link to={`/inventory/${id}`} className={mainClass}>
        <img className="img-fluid" src={pictureAddress} alt="car"/>
        <div>
            <div className="car-info py-3 position-relative">
                <div className="text-truncate py-1">
                    {
                        `${year} ${carManufacturer} ${model}`
                    }
                </div>
                <div className="price py-1">
                    {
                        `$${price}`
                    }
                </div>
            </div>
            <div>
                <ul className="m-0 px-0 py-2 text-muted d-flex">
                    <li className="mr-4">
                            <span>
                                {
                                    `${mpgStreet}/${mpgHighway}`
                                }
                            </span>
                        <MdLocalGasStation/>
                    </li>
                    <li>
                            <span>
                                {
                                    transmissionType
                                }
                            </span>
                        <MdDirectionsCar/>
                    </li>
                </ul>
            </div>
        </div>
    </Link>
);

export default CarListing;