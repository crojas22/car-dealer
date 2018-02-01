import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from "./HomePage";
import Navigation from "./Navigation";
import Inventory from "./Inventory";
import Footer from "./reusables/Footer";

class App extends Component {

    render() {
        return(
            <div>
                <Navigation/>
                <Switch>
                    <Route exact path='/' render={() => (<HomePage />)}/>
                    <Route exact path='/home' render={() => (<HomePage />)}/>
                    <Route exact path='/inventory' render={() => (<Inventory />)}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
