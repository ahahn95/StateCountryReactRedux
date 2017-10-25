import React, {Component} from 'react';
import DropDownList from "./DropDownList";
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log("Suh");

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
