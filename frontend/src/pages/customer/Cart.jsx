import React, { Component } from 'react';
import { connect } from 'react-redux'
import orderService from '../../services/OrderService'
import ItemsList from '../../cmps/items/ItemList'


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


    render() {
        return (<div>
            <div>
                Total: {this.calculateTotal()}$
            <button>PLACE ORDER</button>
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
