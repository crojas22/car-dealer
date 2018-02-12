import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import FaChevronDown from "react-icons/lib/fa/chevron-down";
import FaChevronUp from "react-icons/lib/fa/chevron-up";
import { fetchData, getData } from "../../actions";
import { ADD_TO_URL } from "../../types/actionTypes";
import { fetchDataFunction } from "../../functions/HelperFunctions";

class SearchOptionsCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active,
            selected: false
        }
    }

    onClickHandle(e, variable) {
        let uri = [...this.props.url];
        if (!this.state.selected && !this.props.url.join("").includes(variable)) {
            uri.push(`${variable}=${e.target.innerHTML}&`);
            this.props.getData({address: `${variable}=${e.target.innerHTML}&`}, ADD_TO_URL);
            fetchDataFunction(uri, "year", "desc", this.props.fetchData);
        }
    }

    displayInfo(object={}, array=[], variable, classes) {
        const obj = object[variable] ? object[variable] : {};
        return Object.keys(obj).map((each, index) => {
            return(
                <div key={index} className={classes}>
                        <span onClick={e => {
                            this.onClickHandle(e,variable);
                            this.setState({selected: true})
                        }}>
                            {
                                each
                            }
                        </span>
                    <span className="badge badge-dark rounded-0">
                            {
                                obj[each]
                            }
                        </span>
                </div>
            )
        })
    }

    render() {

        return(
            <div className="col-md-6 col-sm-6 col-lg-12 mb-2">
                {
                    this.state.selected ?
                        <div className="bg-light px-2 p-2 border">
                            {
                                this.displayInfo(this.props.counter, this.props.lables, this.props.search ,"selected")
                            }
                        </div>
                        :
                        <div>
                            <div className="bg-light p-2 border border-bottom-0 title" onClick={() => this.setState({active : !this.state.active})}>
                                <div className="">
                                    {
                                        this.props.title
                                    }
                                </div>
                                <div>
                                    {
                                        this.state.active ? <FaChevronUp/> : <FaChevronDown/>
                                    }
                                </div>
                            </div>
                            <div className="bg-light px-2 border border-top-0">
                                {
                                    this.state.active ?
                                        this.displayInfo(this.props.counter, this.props.lables, this.props.search ,"not-selected")
                                        : null
                                }
                            </div>
                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        url: state.inventorySearchURL
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchData,
        getData
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptionsCategories);