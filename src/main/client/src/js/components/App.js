import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from "./HomePage";
import Navigation from "./Navigation";
import Inventory from "./Inventory";
import Footer from "./reusables/Footer";
import IndividualCarPage from "./IndividualCarPage";

class App extends Component {

    render() {
        return(
            <div>
                <Navigation/>
                <Switch>
                    <Route exact path='/' render={() => (<HomePage />)}/>
                    <Route exact path='/inventory' render={() => (<Inventory />)}/>
                    <Route exact path='/inventory/:car' render={props => (<IndividualCarPage {...props}/>)}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
