import React, { Component } from 'react';
import { connect } from 'react-redux'
import {setCurrentItem } from '../actions/ShopActions';

class ItemDetails extends Component {

    componentDidMount=()=>{
        this.props.setCurrentItem(this.props.match.params.id)

    }

    componentWillUnmount = () => {
        this.props.setCurrentItem(null)

    }

    onBack = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                ItemDetails
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        currentItem: state.shop.currentItem,
    };
};

const mapDispatchToProps = {
    setCurrentItem
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetails);
