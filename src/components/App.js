import React, {Component} from 'react';
import DropDownList from "./DropDownList";
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                <DropDownList input={this.props.countries.countryList}/>
                <DropDownList input={this.props.countries.countryList}/>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        countries: state.countries
    }
}

export default connect(mapStateToProps)(App);
