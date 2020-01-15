import React, { Component } from 'react';
import { connect } from 'react-redux'

class ItemDetails extends Component {

    render() {
        return (
            <div>
                ItemDetails
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        //state
    };
};

const mapDispatchToProps = {
    //functions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetails);
