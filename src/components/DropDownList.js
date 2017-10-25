import  React, { Component } from 'react';

class DropDownList extends Component {
    render() {
        return (
            <select>
                {this.props.input.map(element =>
                <option key={element.code}>{element.name}</option>)}
            </select>
        )
    }
};

export default DropDownList;
