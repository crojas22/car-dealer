import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import SearchOptions from "./inventory/SearchOptions";
import SelectOptions from "./reusables/SelectOptions";
import FaThLarge from "react-icons/lib/fa/th-large";
import FaThList from "react-icons/lib/fa/th-list";
import { fetchData } from "../actions";
import { renderCarListing, renderNavLinks, renderVerticalListing } from "../functions/HelperFunctions";

class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horizontal: false,
            isSearching: false,
            url: ["http://localhost:8080/api/v1/vehicles?"]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.fetchData(this.state.url, "year", "desc");
        this.props.fetchData("http://localhost:8080/api/v1/inventory/options", "GET", "GET_SEARCH_OPTIONS");
    }

    sortInventory() {
        if (this._filter.value.endsWith("oldest first")) this.fetchData(this.state.url, "year", "asc");
        else if (this._filter.value.endsWith("lowest first")) this.fetchData(this.state.url, "price", "asc");
        else if (this._filter.value.endsWith("highest first")) this.fetchData(this.state.url, "price", "desc");
        else this.fetchData(this.state.url, "year", "desc");
    }

    fetchData(array=[], variable, direction) {
        this.props.fetchData(array.concat(`page=0&size=6&sort=${variable},${direction}&`).join(""), "GET", "GET_INVENTORY_DATA");

    }

    handleSubmit(e) {
        e.preventDefault();
        let uri = this.state.url,
            condition = this._condition,
            body = this._body,
            make = this._make,
            model = this._model,
            year = this._year,
            lastSelect = document.querySelectorAll("select");
        if (condition.selectedIndex !== 0) uri.push(`carCondition=${condition.value}&`);
        if (body.selectedIndex !== 0) uri.push(`bodyType=${body.value}&`);
        if (make.selectedIndex !== 0) uri.push(`carManufacturer=${make.value}&`);
        if (model.selectedIndex !== 0) uri.push(`model=${model.value}&`);
        if (year.selectedIndex !== 0) uri.push(`year=${year.value}&`);
        if (uri.length > 1) {
            this.fetchData(uri, "year", "desc");
            lastSelect[lastSelect.length -1].value = lastSelect[lastSelect.length -1].options[0].value;
            this.setState({
                isSearching : true,
                url : [].concat(uri)
            });
        } else this.setState({isSearching : false});
        condition.value = condition.options[0].value;
        body.value = body.options[0].value;
        make.value = make.options[0].value;
        model.value = model.options[0].value;
        year.value = year.options[0].value;
        uri.splice(1);
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
                            <SearchOptions condition={input => this._condition = input} body={input => this._body = input}
                                           make={input => this._make = input} model={input => this._model = input}
                                           year={input => this._year = input} handleSubmit={this.handleSubmit}
                                           options={this.props.options} />
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
                            <div className="render-nav-links my-4">
                                {
                                    renderNavLinks(["first", "prev", "next", "last"], this.props.links, this.props.fetchData, this.state.url)
                                }
                            </div>
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
        options: state.inventorySearchOptions
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchData
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);