
const initalState = {
    items: [],
    selectedItem:null
}

export default function (state = initalState, action = {}) {
    
    switch (action.type) {
        case 'SET_ITEMS':
            console.log('SET_ITEMS',{...state, items: action.items});
            
            return { ...state, items: action.items };

        case 'ITEM_ADD':
            return { ...state, items: [...state.items, action.item] };

        case 'ITEM_UPDATE':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.item.id ? action.item : item
                )
            };

        case 'SET_ITEM':
            return { ...state, selectedItem: action.item };

        default:
            return state
    }
}
