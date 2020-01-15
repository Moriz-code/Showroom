import React, {Component} from 'react';
import { connect } from 'react-redux'

class Wishlist extends Component{

    render(){
        return(
            <div>
                Wishlist
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
)(Wishlist);
