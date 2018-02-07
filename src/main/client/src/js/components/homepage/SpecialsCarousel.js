import React from 'react';
import { renderCarListing } from "../../functions/HelperFunctions";
import { NavControls } from "../reusables/NavControls";

class SpecialsCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayFrom: 0,
            displayTo: 1,
            perPage: 1
        };
    }

    componentDidMount() {
        this.windowSizeEventListener("resize");
        this.updateWindowSize();
    }

    componentWillUnmount() {
        this.windowSizeEventListener("resize");
        this.updateWindowSize();
    }

    updateWindowSize() {
        if (window.innerWidth < 768) {
            this.setState({
                displayFrom: 0,
                perPage: 1,
                displayTo: 1
            });
        } if (window.innerWidth > 768) {
            this.setState({
                displayFrom: 0,
                perPage: 2,
                displayTo: 2
            });
        } if (window.innerWidth > 1200) {
            this.setState({
                displayFrom: 0,
                perPage: 3,
                displayTo: 3
            });
        }
    }

    windowSizeEventListener(listener) {
        window.addEventListener(listener, () => {
            this.updateWindowSize();
        })
    }

    render() {
        const { displayFrom, displayTo, perPage } = this.state;

        const arrayToDisplay = renderCarListing(this.props.newCars, "col-8 col-md-5 col-xl-3 mx-auto", "home-carousel-listing");

        const forward = () => {
            this.setState({
                displayFrom: (displayFrom + perPage) % arrayToDisplay.length,
                displayTo: ((displayTo % arrayToDisplay.length) + perPage)
            });
        };

        const backward = () => {
            if (displayFrom === 0) {
                this.setState({
                    displayFrom: arrayToDisplay.length - perPage,
                    displayTo: arrayToDisplay.length
                });
            } else {
                this.setState({
                    displayFrom: displayFrom - perPage,
                    displayTo: displayTo - perPage
                });
            }
        };

        return(
            <div className="bg-black container-fluid py-4">
                <div>
                    <h3 className="text-white text-center mb-4">
                        SPECIALS
                    </h3>
                </div>
                <div className="row d-flex vertical-align-center flex-nowrap">
                    {
                        arrayToDisplay.slice(displayFrom, displayTo)
                    }
                </div>
                <NavControls add={forward} remove={backward}/>
            </div>
        )
    }
}

export default SpecialsCarousel;