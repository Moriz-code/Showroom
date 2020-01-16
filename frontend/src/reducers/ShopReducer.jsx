
const initalState = {

    //for future use
    shops: [],
    selectedShop: null
}

export default function (state = initalState, action = {}) {
    switch (action.type) {
        case 'SET_SHOP':
            return { state, selectedShop: action.shop }
            
        default:
            return state
    }


}

