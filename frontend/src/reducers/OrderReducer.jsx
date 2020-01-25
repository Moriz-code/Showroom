const INITIAL_STATE = {
orders:[],
itemsInCart:0,
ordersSubmitted:0
};

export default function orderReducer(state = INITIAL_STATE, action) {

    console.log('here');
    
    switch (action.type) {
        
        case 'SAVE_ORDER':
              return { ...state, orders: [...state.orders,...action.orderToSave] }
        case 'INC_CART':
                
                return {...state,itemsInCart:state.itemsInCart+1}
        case 'DEC_CART':
                return {...state,itemsInCart:state.itemsInCart-1}
        case 'CLEAR_CART':
                return {...state,itemsInCart:0}
        default:
            return state; 
    }

}

