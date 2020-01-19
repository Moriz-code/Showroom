
const initalState = {

    //for future use
    shops: [],
    selectedShop: null
}

export default function (state = initalState, action = {}) {
    switch (action.type) {
        case 'SET_SHOP':
            return { state, selectedShop: action.shop }
        
        case 'SET_SETTINGS':
            console.log('SET_SETTINGS - reducer' , action);
            
         return {...state  , selectedShop: action.shopToUpdate }  
        default:
            return state
    }


}

