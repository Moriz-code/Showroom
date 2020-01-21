import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadItems } from '../../actions/ItemActions'


class Search extends Component {

    state = {
        txt: ''
    }

    onInputChange = (ev) => {
        let { value } = ev.target
        this.setState({ txt: value },()=>{
            this.props.loadItems(value)
        })
    }


    render() {
        return (
            <input onChange={this.onInputChange} type="text" value={this.props.searchBy} placeholder="Search" name="txt" ></input>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = {
    loadItems
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
