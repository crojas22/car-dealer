import React from 'react';
import PhoneContactInfo from "./navigation/PhoneContactInfo";
import AddressInfo from "./navigation/AddressInfo";
import RenderLinks from "./reusables/RenderLinks";
import { BtnInput } from "./reusables/Buttons";

class Navigation extends React.Component {


    render() {

        return(
            <nav>
                <div className="justify-content-between navbar navbar-expand-md navbar-dark bg-black py-3">
                    <div>
                        <a className="navbar-brand my-1" >
                            <img src="http://motors.stylemixthemes.com/wp-content/uploads/2015/12/logo.svg" alt="logo"/>
                        </a>
                        <div>
                            <PhoneContactInfo classes="d-md-none"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <AddressInfo classes="d-none d-md-block"/>
                        <PhoneContactInfo classes="d-none d-md-block"/>
                    </div>
                    <BtnInput title={<span className="navbar-toggler-icon"></span>} classes="navbar-toggler border-0"/>
                </div>
                <div className="navbar navbar-expand-md navbar-light bg-light p-0">
                    <div className="collapse navbar-collapse">
                        <RenderLinks links={["Home", "Inventory"]} classUL="navbar-nav"
                                     classA=" nav-link" />
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;