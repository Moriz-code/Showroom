import React, { Component } from 'react';
import { connect } from 'react-redux'
import OrderService from '../../services/OrderService'
import { Divider } from '@material-ui/core';
import InnerNavBar from '../../cmps/InnerNavBar';
class Dashboard extends Component {

    state = {
        orders: null
    }

    componentDidMount = async () => {
        window.scrollTo(0, 0)
        if(this.props.loggedInUser===null||this.props.loggedInUser.shopId==='') this.props.history.push('/')
        const orders = await OrderService.getMyOrders(this.props.loggedInUser.shopId)
        console.log(orders)
        
        this.setState({ orders })
    }

    componentWillUnmount = () => {
        OrderService.setOrdersAsRead(this.state.orders)
 
    }

    renderOrders = () => {
        const sortedOrders=this.state.orders.reverse()
        console.log(sortedOrders);
        
        
        const data = this.state.orders.map(order => {

            return (<div  className={order.isRead? "row" : "row newOrder"}>
                <div className="cell" data-title="Customer Name">
                    {order.byUser.name}
                </div>
                <div className="cell" data-title="Product title">
                    {order.product.title}
                </div>
                <div className="cell" data-title="Price">
                    ${order.product.price}
                </div>
                <div className="cell" data-title="Order Date">
                    {order.boughtAt}
                </div>
            </div>
            )
        })
        return data

    }





    render() {
        return (
            < React.Fragment>
            <InnerNavBar></InnerNavBar>
                <div className="limiter">
                    <div className="container-table100">
                {/* <button className="btn1" onClick={this.goBack}>back</button> */}
                        <div className="wrap-table100">
                            <div className="table">

                                <div className="row header">
                                    <div className="cell">
                                        Customer Name
							</div>
                                    <div className="cell">
                                        Item
							</div>
                    
                                    <div className="cell">
                                        Price
							</div>
                                    <div className="cell">
                                        Order date
							</div>
                                </div>
                                {this.state.orders &&
                                    this.renderOrders()}

                            </div>
                        </div>
                    </div>
                </div>


            </React.Fragment>)

    }

}


const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser
    };
};

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);



