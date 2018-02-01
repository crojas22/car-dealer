import React from 'react';
import MdDirectionsCar from 'react-icons/lib/md/directions-car';
import MdLocalGasStation from 'react-icons/lib/md/local-gas-station';

const CarListing = ({imgSource, carModel, price, mainClass, gas, engine}) => {
    return(
        <a className={mainClass}>
            <img className="img-fluid" src={imgSource} alt="car"/>
            <div>
                <div className="car-info py-3 position-relative">
                    <div className="text-truncate py-1">
                        {
                            carModel
                        }
                    </div>
                    <div className="price py-1">
                        {
                            price
                        }
                    </div>
                </div>
                <div>
                    <ul className="m-0 px-0 py-2 text-muted d-flex">
                        <li className="mr-4">
                            <span>
                                {
                                    gas
                                }
                            </span>
                            <MdLocalGasStation/>
                        </li>
                        <li>
                            <span>
                                {
                                    engine
                                }
                            </span>
                            <MdDirectionsCar/>
                        </li>
                    </ul>
                </div>
            </div>
        </a>
    )
};

export default CarListing;