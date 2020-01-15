import React, {Component} from 'react';
import { connect } from 'react-redux'

class PersonalShop extends Component{

    render(){
        return(
            <div>
                PersonalShop
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
)(PersonalShop);
