import React from 'react';
import { Link } from "react-router-dom";
import MdAddCircle from "react-icons/lib/md/add-circle";

const CompareTop = props => (
    <div key={props.id} className={props.classes}>
        {
            props.carManufacturer ?
                <Link to={`/inventory/${props.id}`}>
                    <img className="img-fluid" src={props.pictureAddress} alt={props.carManufacturer}/>
                    <div className="d-flex justify-content-between my-2">
                        <h5 className="my-2 text-truncate">
                            {
                                `${props.carManufacturer} ${props.model}`
                            }
                        </h5>
                        <div className="price m-1 p-1">
                            {
                                `$${props.price}`
                            }
                        </div>
                    </div>
                </Link>
                :
                <div className="d-flex align-items-center justify-content-center">
                    <Link to="/inventory" className="d-inline-block my-3">
                        <MdAddCircle size={50} color={"#6c98e1"}/>
                    </Link>
                </div>
        }
    </div>
);

CompareTop.defaultProps = {
    carManufacturer: "",
    model: ""
};



export default CompareTop;