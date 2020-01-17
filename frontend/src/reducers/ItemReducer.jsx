
const initalState = {
    items: [],
    selectedItem: null,

}

export default function (state = initalState, action = {}) {

    switch (action.type) {
        case 'SET_ITEMS':
            // console.log('SET_ITEMS',{...state, items: action.items});

            return { ...state, items: action.items };

        case 'ITEM_ADD':
            return { ...state, items: [...state.items, action.item] };

        case 'ITEM_UPDATE':
            return {
                ...state,
                items: state.items.map(item =>
                    item._id === action.item._id ? action.item : item
                )
            };

        case 'DELETE_ITEM':
            const { id } = action;
            const idx = state.items.findIndex(item => item._id === id);
            return {
                ...state, items: [...state.items.slice(0, idx)]
            };

        case 'SET_ITEM':
            return { ...state, selectedItem: action.item };

        // case 'SET_FILTER':
        //       return { ...state, filterBy: { ...action.filterBy } }

        default:
            return state
    }
}
