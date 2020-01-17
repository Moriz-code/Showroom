const INITIAL_STATE = {
orders:[],

};

export default function orderReducer(state = INITIAL_STATE, action) {

  
    
    switch (action.type) {
        
        case 'SAVE_ORDER':
              return { ...state, orders: [...state.orders,...action.orderToSave] }
    
        default:
            return state; 
    }

}

