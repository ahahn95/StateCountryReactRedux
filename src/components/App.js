import React, {Component} from 'react';
import DropDownList from "./DropDownList";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {fetchCountries, fetchStates, setSelectedCountry} from "../actions/actions";

class App extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.componentWillMount = this.componentWillMount(this);
    }

    componentWillMount() {
        this.props.actions.fetchCountries();
    }

    handleChange(event) {
        this.props.actions.fetchStates(event.target.value)
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

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            fetchCountries: bindActionCreators(fetchCountries,dispatch),
            fetchStates: bindActionCreators(fetchStates,dispatch),
            setSelectedCountry : bindActionCreators(setSelectedCountry, dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
