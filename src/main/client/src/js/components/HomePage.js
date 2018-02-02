import React from 'react';
import RenderLinks from "./reusables/RenderLinks";
import RenderCarListing from "./homepage/RenderCarListing";
import { BtnLink } from "./reusables/Buttons";
import WhyUs from "./homepage/WhyUs";
import SpecialsCarousel from "./homepage/SpecialsCarousel";
import BackgroundSellBuy from "./homepage/BackgroundSellBuy";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTabActive: "New Cars"
        }
    }

    componentWillMount() {
        
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
                    <RenderCarListing currentTab={this.state.currentTabActive}/>
                    <div className="d-flex w-100 my-4">
                        <BtnLink title="SHOW ALL" to="inventory" classes="btn-primary d-block mx-auto"/>
                    </div>
                </div>
                <BackgroundSellBuy />
                <SpecialsCarousel/>
                <WhyUs/>
                <BackgroundSellBuy />
            </div>
        )
    }
}

export default HomePage;