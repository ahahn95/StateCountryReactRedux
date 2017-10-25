import  React, { Component } from 'react';

class DropDownList extends Component {
    render() {
        return (
            <select onChange={this.props.handleChange}>
                {this.props.input.map(element =>
                <option value={element.code} key={element.code}>{element.name}</option>)}
            </select>
        )
    }
};

export default DropDownList;
