import React from 'react';
import MdDirectionsCar from 'react-icons/lib/md/directions-car';
import SelectOptions from "../reusables/SelectOptions";
import { BtnSubmit } from "../reusables/Buttons";

const SearchOptions = ({options, condition, body, make, model, year, handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <div className="p-4 text-center mb-4">
                <h5><MdDirectionsCar size={30}/>Search Options</h5>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-12 p-2">
                        <SelectOptions selectRefVal={condition}
                            options={["Condition"].concat(options.condition)}/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-12 p-2">
                        <SelectOptions selectRefVal={body}
                            options={["Body"].concat(options.body)}/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-12 p-2">
                        <SelectOptions selectRefVal={make}
                            options={["Make"].concat(options.make)}/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-12 p-2">
                        <SelectOptions selectRefVal={model}
                            options={["Model"].concat(options.model)}/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-12 p-2">
                        <SelectOptions selectRefVal={year}
                            options={["Year"].concat(options.year)}/>
                    </div>
                </div>
            </div>
            <BtnSubmit title="Search" classes="btn-primary m-2"/>
        </form>
    )
};

export default SearchOptions;