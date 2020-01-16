import React, {Component} from 'react';
import { connect } from 'react-redux'
import OrderService from '../../services/OrderService'
import ItemsList from '../../cmps/items/ItemList'


class Cart extends Component{

    state={
        items:[]
    }

componentDidMount=async()=>{

   const cart=await OrderService.getOrder()
    this.setState({items:cart})
}


    render(){
        return( <div>
            {this.state.items ? <ItemsList items={this.state.items}></ItemsList>:"You dont have any items yet..."}
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
