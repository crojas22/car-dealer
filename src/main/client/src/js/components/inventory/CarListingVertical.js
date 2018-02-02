import React from 'react';
import FaRoad from 'react-icons/lib/fa/road';
import MdLocalGasStation from 'react-icons/lib/md/local-gas-station';
import GoCalendar from 'react-icons/lib/go/calendar';
import MdDirectionsCar from 'react-icons/lib/md/directions-car';

const CarListingVertical = () => {
    return(
        <div className="car-listing-vertical row mt-5 position-relative">
            <div className="col-md-4 mt-1 mb-4">
                <img className="img-fluid" src="/images/2017bmw328i/bmw.jpeg" alt="car"/>
            </div>
            <div className="col-md-8 pl-md-0">
                <div className="d-flex justify-content-between">
                    <div >
                        <a>
                            <h4>BMW 328i, Sport Line Body Kit</h4>
                        </a>
                    </div>
                    <div className="price mt-1">
                        <span>$38 000</span>
                        <span>$28 000</span>
                    </div>
                </div>
                <div className="car-info row d-md-flex my-md-4 mx-md-2 justify-content-md-between">
                    <div className="col-md">
                        <div className="x">
                            <div>
                                <FaRoad/>
                                <span>Miles</span>
                            </div>
                            <div>48000</div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="x">
                            <div>
                                <MdLocalGasStation/>
                                <span>Type</span>
                            </div>
                            <div className="d-md-block">  Gasoline</div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="x">
                            <div>
                                <GoCalendar/>
                                <span>Year</span>
                            </div>
                            <div className="d-md-block">  2015</div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div>
                            <div className="x">
                                <MdDirectionsCar/>
                                <span>Transmission</span>
                            </div>
                            <div className="d-md-block">  Automatic</div>
                        </div>
                    </div>
                </div>
                <ul className="car-links p-0 my-4 d-sm-flex">
                    <li className="bg-light">
                        <div>
                            <span>stock# </span> 453221
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