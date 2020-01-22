import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadItems } from '../../actions/ItemActions'
import { Link } from 'react-router-dom'


class Search extends Component {

    state = {
        txt: ''
    }

    onInputChange = (ev) => {
        let { value } = ev.target
        this.setState({ 'txt': value }, () => {
            this.props.loadItems({ 'txt': value })
        })
    }


    render() {
        return (
            <div className="search flex column align-center">
                <input onChange={this.onInputChange} type="text" value={this.props.searchBy} placeholder="   Let's take a tour and SEARCH an amazing products" name="txt" ></input>
                <Link to={`/item/${this.state.txt}`}><button>Go For It!</button></Link>
                {/* <button onclick={this.onInputChange} name="labels" value="summer" >Summer</button>
                <button onclick={this.onInputChange} name="labels" value="dress">Dresses</button>
                <button onclick={this.onInputChange} name="labels" value="boots">Boots</button> */}

            </div>
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
