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
        const orders = await OrderService.getMyOrders(this.props.loggedInUser.shopId)
        this.setState({ orders })
    }

    // goBack=()=>{
    //   this.props.history.goBack()
    // }

    renderOrders = () => {
        const data = this.state.orders.map(order => {

            return (<div class="row">
                <div class="cell" data-title="Product title">
                    {order.product.title}
                </div>
                <div class="cell" data-title="Price">
                    ${order.product.price}
                </div>
                {/* <div class="cell" data-title="Age">
                    <img style={{ width: 100, height: 100 }} src={order.product.imgUrl} />
                </div> */}
                <div class="cell" data-title="Customer Name">
                    {order.byUser.name}
                </div>
                <div class="cell" data-title="Order Date">
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
                <div class="limiter">
                    <div class="container-table100">
                {/* <button className="btn1" onClick={this.goBack}>back</button> */}
                        <div class="wrap-table100">
                            <div class="table">

                                <div class="row header">
                                    <div class="cell">
                                        Title
							</div>
                                    <div class="cell">
                                        Price
							</div>
                                    {/* <div class="cell">
                                    Item Image
							</div> */}
                                    <div class="cell">
                                        Customer Name
							</div>
                                    <div class="cell">
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



