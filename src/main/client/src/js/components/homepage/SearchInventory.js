import React from 'react';
import MdDirectionsCar from 'react-icons/lib/md/directions-car';
import { SelectOptions } from "../reusables/SelectOptions";
import { BtnSubmit } from "../reusables/Buttons";

const SearchInventory = () => {
    let _first, _second, _third, _fourth;

    const handleSubmit = e => {
        e.preventDefault();
        console.log(_first.value)
    };

    return(
        <div className="container-fluid my-4 search-inventory">
            <h2 className="mb-3"><MdDirectionsCar />Search Inventory</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-md-6 col-lg-3 mb-3">
                        <SelectOptions selectRefVal={input => _first = input} options={["ok"]}/>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3">
                        <SelectOptions selectRefVal={input => _second = input}  options={["ok"]}/>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3">
                        <SelectOptions selectRefVal={input => _third = input}  options={["ok"]}/>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3">
                        <SelectOptions selectRefVal={input => _fourth = input}  options={["ok"]}/>
                    </div>
                </div>
                <BtnSubmit title="Search" classes="btn btn-primary"/>
            </form>
        </div>
    )
};

export default SearchInventory;