import React, { Component } from 'react';
import { connect } from 'react-redux'

class ShopApp extends Component {


    render() {
        return(
            <h1>ShopApp!!!!!!!!!</h1>
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
)(ShopApp);
