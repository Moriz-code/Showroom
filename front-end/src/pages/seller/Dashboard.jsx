import React, {Component} from 'react';
import { connect } from 'react-redux'

class Dashboard extends Component{

    render(){
        return(
            <div>
                Dashboard
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
)(Dashboard);
