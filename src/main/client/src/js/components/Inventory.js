import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import SearchOptions from "./inventory/SearchOptions";
import SelectOptions from "./reusables/SelectOptions";
import FaThLarge from "react-icons/lib/fa/th-large";
import FaThList from "react-icons/lib/fa/th-list";
import { fetchData, setData, searchOptionStatus } from "../actions";
import {
    fetchDataFunction, renderCarListing, renderVerticalListing, sliceArray
} from "../functions/HelperFunctions";
import PaginationLinks from "./inventory/PaginationLinks";
import {
    REMOVE_FROM_URL, REMOVE_OPTIONS_SELECTED, UPDATE_INVENTORY_LAYOUT,
    UPDATE_INVENTORY_SORT
} from "../types/actionTypes";

class Inventory extends React.Component {
    componentDidMount() {
        fetchDataFunction(this.props.url, this.props.sort.sortBy, this.props.sort.direction, this.props.fetchData);
        document.querySelector("select").selectedIndex = this.props.sort.index;
    }

    sortInventory() {
        if (this._filter.value.endsWith("oldest first")){
            this.props.setData({sortBy: "year", direction: "asc", index: 1}, UPDATE_INVENTORY_SORT);
            fetchDataFunction(this.props.url, "year", "asc", this.props.fetchData);
        } else if (this._filter.value.endsWith("lowest first")) {
            this.props.setData({sortBy: "price", direction: "asc", index: 2}, UPDATE_INVENTORY_SORT);
            fetchDataFunction(this.props.url, "price", "asc", this.props.fetchData);
        } else if (this._filter.value.endsWith("highest first")) {
            this.props.setData({sortBy: "price", direction: "desc", index: 3}, UPDATE_INVENTORY_SORT);
            fetchDataFunction(this.props.url, "price", "desc", this.props.fetchData);
        } else {
            this.props.setData({sortBy: "year", direction: "desc", index: 0}, UPDATE_INVENTORY_SORT);
            fetchDataFunction(this.props.url, "year", "desc", this.props.fetchData);
        }
    }

    render() {
        return(
            <div className="inventory">
                <div>
                    <h2 className="text-white p-3">Inventory</h2>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="search-options col-lg-3">

                            <SearchOptions array={this.props.inventory} resetPage={this.props.resetPage}/>

                        </div>
                        <div className="col-lg-9 col-sm-12">
                            <div className=" d-sm-flex mt-4 justify-content-sm-between align-items-center">
                                <div className="v-available mb-3 mb-sm-0">
                                    <span>{this.props.inventory.length} </span>VEHICLES AVAILABLE
                                </div>
                                <div className="filter-search-icon d-flex justify-content-between align-items-center">
                                    <div className="mr-sm-3">
                                        <SelectOptions
                                            selectRefVal={input => this._filter = input}
                                            options={["Date: newest first","Date: oldest first","Price: lowest first", "Price: highest first"]}
                                            selectOnChange={() => this.sortInventory()}/>
                                    </div>
                                    <div>
                                        <FaThLarge size={30} color={(this.props.layout ? "black":null)}
                                                   onClick={() => this.props.setData(true, UPDATE_INVENTORY_LAYOUT)}/>

                                        <FaThList size={30} color={(!this.props.layout ? "black":null)}
                                                  onClick={() => this.props.setData(false, UPDATE_INVENTORY_LAYOUT)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex pb-4 border-bottom flex-wrap justify-content-center justify-content-sm-start">
                                {
                                    this.props.optionsSelected.length > 0 ?
                                        this.props.optionsSelected.map((each, index, arr) => {
                                            if (each != null) {
                                                return(
                                                    <div className="options-selected d-flex py-2 pl-2 bg-light mt-4 mr-2" key={index}>
                                                        <div>
                                                            <span className="mr-1 text-muted">
                                                                {
                                                                    each.key
                                                                }:
                                                            </span>
                                                                    <span>
                                                                {
                                                                    each.value
                                                                }
                                                            </span>
                                                        </div>
                                                        <div className="ml-1 px-2" onClick={() => {
                                                            let uri = [...this.props.url],
                                                                selectedOptions = [...arr];
                                                            uri[each.index] = null;
                                                            selectedOptions[each.index] = null;
                                                            this.props.setData(uri, REMOVE_FROM_URL);
                                                            this.props.setData(selectedOptions, REMOVE_OPTIONS_SELECTED);
                                                            this.props.searchOptionStatus(false, each.selectedType);
                                                            fetchDataFunction(uri, this.props.sort.sortBy, this.props.sort.direction, this.props.fetchData)}}>
                                                            X
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })
                                        :
                                        null
                                }
                            </div>
                            {
                                this.props.layout ?
                                    <div className="row">
                                        {
                                            renderCarListing(
                                                sliceArray(this.props.inventory, this.props.pageNumber, this.props.perPage),
                                                "col-xl-3 col-md-4 col-sm-6 mt-4 pt-1 mb-3", "home-listing"
                                            )
                                        }
                                    </div>
                                    : renderVerticalListing(sliceArray(this.props.inventory, this.props.pageNumber, this.props.perPage))
                            }
                            {
                                <div className="render-nav-links my-4 text-center">
                                    <PaginationLinks perPage={this.props.perPage} pageNumber={this.props.pageNumber}
                                                     arrayLength={this.props.inventory.length} changePage={this.props.changePage}/>
                                </div>
                            }
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
        url: state.inventorySearchURL,
        sort: state.inventorySortInfo,
        layout: state.inventoryLayout,
        optionsSelected: state.optionsSelected
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchData,
        setData,
        searchOptionStatus
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);