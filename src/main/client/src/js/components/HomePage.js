import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { RenderLinks } from "./reusables/RenderLinks";
import RenderCarListing from "./homepage/RenderCarListing";
import { BtnLink } from "./reusables/Buttons";
import WhyUs from "./homepage/WhyUs";
import SpecialsCarousel from "./homepage/SpecialsCarousel";
import BackgroundSellBuy from "./homepage/BackgroundSellBuy";
import { fetchDataAction } from "../actions";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTabActive: "New Cars"
        }
    }

    componentWillMount() {
        this.props.fetchDataAction("http://localhost:8080/api/v1/home/inventory?page=0&size=6", "GET");
    }

    render() {
        return(
            <div>
                <div className="image-background">
                </div>
                <div className="welcome container-fluid">
                    <div>
                        <h2 className="pb-3 pt-4 my-0">
                            <span className="text-white">WELCOME TO </span>
                            <span>MOTORS WORLD</span>
                        </h2>
                    </div>
                    <div className="pt-3">
                        <RenderLinks links={["New Cars", "Used Cars", "Search Inventory"]}
                                     classUL="nav-tab-menu m-0 p-0" classA=""
                                     active={this.state.currentTabActive}
                                     clickHandle={event => {
                                         event.preventDefault();
                                         this.setState({currentTabActive: event.target.innerHTML})
                                     }}/>
                    </div>
                </div>
                <div className="container-fluid mb-3">
                    <RenderCarListing newCars={this.props.newCars} usedCars={this.props.usedCars}
                        currentTab={this.state.currentTabActive}/>

                    <div className={"w-100 my-4 " + (this.state.currentTabActive === "Search Inventory" ? "d-none": "d-flex")}>
                        <BtnLink title="SHOW ALL" to="inventory" classes="btn-primary mx-auto" onClick={() => window.scrollTo(0,0)}/>
                    </div>
                </div>
                <BackgroundSellBuy />
                <SpecialsCarousel newCars={this.props.newCars}/>
                <WhyUs/>
                <BackgroundSellBuy />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        newCars: state.newCarData,
        usedCars: state.usedCarData
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchDataAction,
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);