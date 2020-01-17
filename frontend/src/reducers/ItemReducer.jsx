
const initalState = {
    items: [],
    selectedItem: null,
    filter: []
}

export default function (state = initalState, action = {}) {
    switch (action.type) {
        case 'SET_ITEMS':
            console.log('SET_ITEMS', { ...state, items: action.items });
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

        case 'SET_ITEM':
            return { ...state, selectedItem: action.item };

        case 'SET_FILTERS':
            console.log({ ...state, filter: [...state.filter, action.filters] });
            return ({ ...state, filter: [...state.filter, action.filters] })

        case 'REMOVE_FILTER':
            return {
                ...state, filter: state.filter.filter(curFilter => {
                   _checkMatchFilter(curFilter,action.filter)
                })
            }
        default:
            return state
    }
}

function _checkMatchFilter (curFilter, actionFilter) {
    let filterKey, filterValue, actionKey, actionValue;
    for (const key in curFilter) {
        filterKey = key;
        filterValue = curFilter[key]
        for (const key in actionFilter) {
            actionKey = key;
            actionValue = actionFilter[key]
        }
        if (filterKey === actionKey && filterValue === actionValue) return true
        return false

    }
}

