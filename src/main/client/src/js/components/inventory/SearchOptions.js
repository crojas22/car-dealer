import React from 'react';
import MdDirectionsCar from 'react-icons/lib/md/directions-car';
import SelectOptions from "../reusables/SelectOptions";

const SearchOptions = ({options}) => {
    return(
        <form>
            <div className="p-4 text-center mb-4">
                <h5><MdDirectionsCar size={30}/>Search Options</h5>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-12 p-2">
                        <SelectOptions options={["Condition"].concat(options.condition)}/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-12 p-2">
                        <SelectOptions options={["Body", "Sedan", "Coupe", "SUV"]}/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-12 p-2">
                        <SelectOptions options={["Make", "BMW", "Ford", "Honda", "Kia", "Nissan", "Toyota"]}/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-12 p-2">
                        <SelectOptions options={["Model", "Accord", "Camry", "Civic", "Explorer", "Pilot", "Soul"]}/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-12 p-2">
                        <SelectOptions options={["Max Mileage", "< 5000", "5000-10000", "10000-20000", "20000-25000", "> 25000"]}/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-12 p-2">
                        <SelectOptions options={["Year", "2018", "2017", "2016", "2015", "2014"]}/>
                    </div>
                </div>
            </div>
        </form>
    )
};

export default SearchOptions;