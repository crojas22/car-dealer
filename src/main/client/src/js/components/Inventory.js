import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import SearchOptions from "./inventory/SearchOptions";
import SelectOptions from "./reusables/SelectOptions";
import FaThLarge from "react-icons/lib/fa/th-large";
import FaThList from "react-icons/lib/fa/th-list";
import { fetchData, getData } from "../actions";
import {
    fetchDataFunction, renderCarListing, renderNavLinks,
    renderVerticalListing
} from "../functions/HelperFunctions";

class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horizontal: false,
        };
    }

    componentWillMount() {
        fetchDataFunction(this.props.url, "year", "desc", this.props.fetchData);
    }

    sortInventory() {
        if (this._filter.value.endsWith("oldest first")) fetchDataFunction(this.props.url, "year", "asc", this.props.fetchData);
        else if (this._filter.value.endsWith("lowest first")) fetchDataFunction(this.props.url, "price", "asc", this.props.fetchData);
        else if (this._filter.value.endsWith("highest first")) fetchDataFunction(this.props.url, "price", "desc", this.props.fetchData);
        else fetchDataFunction(this.state.url, "year", "desc", this.props.fetchData);
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

                            <SearchOptions array={this.props.inventory} />

                        </div>
                        <div className="col-lg-9 col-sm-12">
                            <div className=" d-flex mt-5 pb-5 border-bottom justify-content-between">
                                <div className="d-flex">
                                    <span className="text-muted mr-2">Sort by: </span>
                                    <SelectOptions
                                        selectRefVal={input => this._filter = input}
                                        options={["Year: newest first","Year: oldest first","Price: lowest first", "Price: highest first"]}
                                        selectOnChange={() => this.sortInventory()}/>
                                </div>
                                <div className="filter-search-icon">
                                    <FaThLarge size={30} color={(this.state.horizontal ? "black":null)}
                                               onClick={() => this.setState({horizontal: true})}/>

                                    <FaThList size={30} color={(!this.state.horizontal ? "black":null)}
                                              onClick={() => this.setState({horizontal: false})}/>
                                </div>
                            </div>
                            {
                                this.state.horizontal ?
                                    <div className="row">
                                        {
                                            renderCarListing(this.props.inventory, "col-xl-3 col-md-4 col-sm-6 my-3", "home-listing")
                                        }
                                    </div>
                                    : renderVerticalListing(this.props.inventory)
                            }
                            {/*<div className="render-nav-links my-4">*/}
                                {/*{*/}
                                    {/*renderNavLinks(["first", "prev", "next", "last"], this.props.links, this.props.fetchData, this.props.url)*/}
                                {/*}*/}
                            {/*</div>*/}
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
        links: state.wholeInventoryLinks,
        url: state.inventorySearchURL
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchData,
        getData
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);