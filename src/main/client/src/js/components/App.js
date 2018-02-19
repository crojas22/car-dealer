import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from "./HomePage";
import Navigation from "./Navigation";
import Inventory from "./Inventory";
import Footer from "./reusables/Footer";
import IndividualCarPage from "./IndividualCarPage";
import Compare from "./Compare";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            perPage: 6,
            pageNumber: 1,
            inventoryLayout: false
        };
        this.changePageNumber = this.changePageNumber.bind(this);
        this.resetPage = this.resetPage.bind(this);
    }

    resetPage() {
        this.setState({pageNumber: 1});
    }

    changePageNumber(value, totalLinks) {
        if (!isNaN(value)) {
            this.setState({pageNumber: parseInt(value, 10)});
            window.scrollTo(0,0);
        } else if (value === "&lt;&lt;" && this.state.pageNumber > 1) {
            this.setState({pageNumber: this.state.pageNumber - 1});
            window.scrollTo(0,0);
        } else if (value === "&gt;&gt;" && this.state.pageNumber < totalLinks) {
            this.setState({pageNumber: this.state.pageNumber + 1});
            window.scrollTo(0,0);
        }
    }

    render() {
        return(
            <div>
                <Navigation/>
                <Switch>
                    <Route exact path='/' render={() => (<HomePage />)}/>
                    <Route exact path='/inventory' render={
                        () => (<Inventory {...this.state} onClick={variable => this.setState({inventoryLayout: variable})}
                                          changePage={this.changePageNumber} resetPage={this.resetPage}/>)
                    }/>
                    <Route exact path='/inventory/:car' render={props => (<IndividualCarPage {...props}/>)}/>
                    <Route exact path="/compare" render={() => <Compare /> }/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
