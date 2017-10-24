import React, {Component} from 'react';
import DropDownList from "./DropDownList";
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                <DropDownList input={"Hi"}/>
                <DropDownList input={"Hi"}/>
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
