import React, {Component} from 'react';
import { connect } from 'react-redux'

class SignUp extends Component{

    render(){
        return(
            <div>
                signup
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
)(SignUp);
