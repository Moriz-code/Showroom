import ItemService from '../services/ItemService'

export function loadItems(filterBy) {
    return async dispatch => {
        try {
            const items = await ItemService.query(filterBy);
            dispatch(setItems(items));
        } catch (err) {
            console.log('ItemActions: err in loadItems', err);
        }
    }
}

function setItems(items) {
    return {
        type: 'SET_ITEMS',
        items
    }
}

export function removeFilter(filter){
    console.log('removeFilter',filter);
    return{
        type: 'REMOVE_FILTER',
        filter
    }
}

export function setFilters(filters) {
    console.log('filters',filters);
    return {
        type: 'SET_FILTERS',
        filters
    }
}


// export function setFilter(filterBy) {
//     return {
//         type: 'SET_FILTERS',
//         filterBy
//     }
// }


// export function setFilterBy(filterBy) {
//     return (dispatch) => dispatch(setFilter(filterBy))
// }


export function setCurrentItem(itemId) {
    return async dispatch => {
        try {
            const item = await ItemService.get(itemId);
            await dispatch({ type: 'SET_ITEM', item })
        } catch (err) {
            console.log('ReviewActions: err in loadReviews', err);
        }

    }
}


export function deleteItem(itemId) {
    return async dispatch => {
        try {
            const item = await ItemService.remove(itemId);
            await dispatch({ type: 'DELETE_ITEM', item })
        } catch (err) {
            console.log('ReviewActions: err in loadReviews', err);
        }

    }
}




// export function deleteItem(itemId) {
//     return (dispatch) => {
//         ItemService.remove(itemId)
//         .then(() =>{
//             await dispatch({ type: 'SET_ITEM', item })
//         })
//     }
// }

