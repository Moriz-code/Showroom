import React, { Component } from 'react';
import { connect } from 'react-redux'
import orderService from '../../services/OrderService'
import ItemsList from '../../cmps/items/ItemList'
import { placeOrder } from '../../actions/OrderActions'

class Cart extends Component {

    state = {
        items: []
    }

    componentDidMount = async () => {
        const cart = await orderService.getOrder()
        this.setState({ items: cart })
    }

    deleteItem = async (itemId) => {
        await orderService.removeItemFromCart(itemId)
        const cart = await orderService.getOrder()
        this.setState({ items: cart })
    }


    calculateTotal = () => {
        const totalPrice = this.state.items.reduce((acc, item) => {
            return acc += item.price
        }, 0)
        return totalPrice
    }

    onPlaceOrder = async () => {
        await this.props.placeOrder(this.props.loggedInUser)
        await this.clearCart()
        this.props.history.push("/")
    }

    clearCart=async()=>{
        orderService.clearCart()
    }
    render() {
        return (<div>
            <div>
                Total: {this.calculateTotal()}$
            <button onClick={this.onPlaceOrder}>PLACE ORDER</button>
            </div>
            {this.state.items ?
                <div>
                    <ItemsList deleteItem={this.deleteItem} listMode="cartMode" items={this.state.items}></ItemsList>

                </div>
                : "You dont have any items yet..."}
        </div>
        )
    }


}




const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser
    };
};

const mapDispatchToProps = {
    placeOrder
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
