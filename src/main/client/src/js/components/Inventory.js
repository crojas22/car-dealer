import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import SearchOptions from "./inventory/SearchOptions";
import SelectOptions from "./reusables/SelectOptions";
import FaThLarge from "react-icons/lib/fa/th-large";
import FaThList from "react-icons/lib/fa/th-list";
import { fetchCarInventory } from "../actions";
import { renderVerticalListing } from "../functions/HelperFunctions";
import { InventoryNavigation } from "./reusables/NavControls";

class Inventory extends React.Component {
    componentWillMount() {
        this.props.fetchCarInventory("http://localhost:8080/api/v1/vehicles?page=0&size=6&sort=year,desc", "GET");
    }

    render() {
        return(
            <div className="inventory p">
                <div>
                    <h2 className="text-white p-3">Inventory</h2>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="search-options col-lg-3">
                            <SearchOptions />
                        </div>
                        <div className="col-lg-9 col-sm-12">
                            <div className=" d-flex mt-5 pb-5 border-bottom justify-content-between">
                                <div className="d-flex">
                                    <span className="text-muted mr-2">Sort by: </span>
                                    <SelectOptions
                                        options={["Date: newest first","Date: oldest first","Price: lowest first", "Price: highest first"]}/>
                                </div>
                                <div className="filter-search-icon">
                                    <FaThLarge size={30}/>
                                    <FaThList size={30}/>
                                </div>
                            </div>
                            {
                                renderVerticalListing(this.props.inventory)
                            }
                            <InventoryNavigation fetch={this.props.fetchCarInventory} links={this.props.links}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        inventory: state.wholeInventoryData,
        links: state.wholeInventoryLinks
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchCarInventory
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);