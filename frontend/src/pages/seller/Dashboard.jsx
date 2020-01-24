import React, {Component} from 'react';
import { connect } from 'react-redux'
import OrderService from '../../services/OrderService'
import { Divider } from '@material-ui/core';
class Dashboard extends Component{

    state={
        orders:null
    }

    componentDidMount= async ()=>{
        const orders=await OrderService.getMyOrders('5e230e471a0d5feaa843e503')
        this.setState({orders})
    }
        

    renderOrders=()=>{
        const data=this.state.orders.map(order=>{

        return  (<ul>
                    <li>{order.product.title}</li>
                    <li>${order.product.price}</li>
                    <img  style={{width: 100, height: 100}} src={order.product.imgUrl}/>
                    <li>{order.byUser.name}</li>
                    <li>{order.boughtAt}</li>
                </ul>
            )
        })
        return data

    }





    render(){
        return(
            <div>
            {this.state.orders &&
                  this.renderOrders()}
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
  
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
