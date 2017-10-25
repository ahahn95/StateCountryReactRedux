import React, {Component} from 'react';
import DropDownList from "./DropDownList";
import { connect } from 'react-redux';
import { store } from '../index.js'
import {fetchCountries, fetchStates} from "../actions/actions";

class App extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.componentWillMount = this.componentWillMount(this);
    }

    componentWillMount() {
        store.dispatch(fetchCountries());
    }

    handleChange(event) {
        console.log(event.target.value)
        store.dispatch(fetchStates(event.target.value));

    }

    render() {
        return (
            <div>
                {!this.props.countries.isFetching && <DropDownList input={this.props.countries.countryList} handleChange={this.handleChange} />}
                {!this.props.states.isFetching && <DropDownList input={this.props.states.stateList} />}
            </div>
        );
    }

}

function mapStateToProps(state) {
    const { countryReducer, stateReducer } = state;
    return {
        countries: countryReducer,
        states: stateReducer
    }
}

export default connect(mapStateToProps)(App);
