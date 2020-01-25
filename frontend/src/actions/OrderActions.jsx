import orderService from "../services/OrderService";

export function placeOrder(loggedInUser) {
    const miniUser = { id: loggedInUser._id, name: loggedInUser.fullName }

    return async dispatch => {
        const order = await orderService.getOrder()
        
        const orderToSave = _createOrder(miniUser, order)
        
        try {
            
            const addedOrder = orderService.add(orderToSave) 
            dispatch({
                type: 'SAVE_ORDER',
                orderToSave
            })
        }
        catch (err) {
            console.log(`Error placing order ${order}`);
        }
    }
}



function _createOrder(miniUser, order) {

    const orderToSave = order.map(item => {

        return {
            product: {
                id: item._id,
                title: item.title,
                size:item.size,
                price: item.price,
                imgUrl: item.imgs[0],
            },
            fromShop: {
                id: item.itemOwner.id,
                name: item.itemOwner.name
            },
            byUser: { ...miniUser },
            boughtAt: Date.now()
        }
    })
    return orderToSave
}



export function addToCart() {
    return async dispatch => {
        try {
           
            dispatch({type:'INC_CART'})
        } catch (err) {
            console.log('cant add to cart');
        }
    }

}
export function removeFromCart() {
    return async dispatch => {
        try {
           
            dispatch({type:'DEC_CART'})
        } catch (err) {
            console.log('cant add to cart');
        }
    }

}
export function clearCart() {
    return async dispatch => {
        try {
            dispatch({type:'CLEAR_CART'});
        } catch (err) {
            console.log('cant add to cart');
        }
    }

}

