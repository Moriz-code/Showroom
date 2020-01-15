import React, {Component} from 'react';
import { connect } from 'react-redux'

class Cart extends Component{

    render(){
        return(
            <div>
                Cart
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
)(Cart);
