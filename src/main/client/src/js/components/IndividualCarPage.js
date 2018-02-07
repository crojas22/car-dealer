import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { RenderBreadcrumps, RenderCarInfoLinks } from "./reusables/RenderLinks";
import { fetchCarInfo } from "../actions";
import { TrTd } from "./reusables/Div";

class IndividualCarPage extends React.Component {
    componentDidMount() {
        this.props.fetchCarInfo(`http://localhost:8080/api/v1/vehicles/${this.props.match.params.car}?projection=features`, 'GET');
    }

    render() {
        const {carManufacturer, year, model, pictureAddress, price, exteriorColor, interiorColor, vinNumber,
            bodyType, mileage, fuelType, transmissionType, wheelDrive} = this.props.info;
        const title = `${year} ${carManufacturer} ${model}`;
        return(
            <div className="individual-car-page container-fluid px-md-5">
                <RenderBreadcrumps title={title}/>
                <div className="row">
                    <div className="col-lg-8">
                        <h4 className="pt-2">
                            {
                                title
                            }
                        </h4>
                        <RenderCarInfoLinks />
                        <div>
                            <img className="img-fluid w-100" src={pictureAddress} alt={carManufacturer}/>
                        </div>
                    </div>
                    <div className="col-lg-4 side-panel">
                        <div className="p-4 mt-2">
                            <span>OUR PRICE </span><span>${price}</span>
                        </div>
                        <div className="bg-black text-center text-uppercase">
                            plus taxes
                        </div>
                        <table className="my-2 table">
                            <tbody>
                                <TrTd title="BODY" value={bodyType}/>
                                <TrTd title="MILEAGE" value={mileage}/>
                                <TrTd title="FUEL TYPE" value={fuelType}/>
                                <TrTd title="YEAR" value={year}/>
                                <TrTd title="TRANSMISSION" value={transmissionType}/>
                                <TrTd title="DRIVE" value={wheelDrive}/>
                                <TrTd title="EXTERIOR COLOR" value={exteriorColor}/>
                                <TrTd title="INTERIOR COLOR	" value={interiorColor}/>
                                <TrTd title="VIN" value={vinNumber}/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        info : state.individualCarData
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchCarInfo
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(IndividualCarPage);