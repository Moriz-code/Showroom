import ItemService from '../services/ItemService'

export function loadItems(filterBy) {
    console.log('loadItems',filterBy);
    
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
    console.log('items',items);
    
    return {
        type: 'SET_ITEMS',
        items
    }
}

export function removeFilter(filter){
    return{
        type: 'REMOVE_FILTER',
        filter
    }
}

export function setFilters(filters) {
    return {
        type: 'SET_FILTERS',
        filters
    }
}

export function setSorts(sorts) {
    return {
        type: 'SET_SORTS',
        sorts
    }
}

export function saveItem(item) {
    return async dispatch => {
        try {
            if (!item._id) {
                item._id = _makeId();
                const addedItem = await ItemService.add(item);
                console.log(addedItem)
                dispatch({type: 'ITEM_ADD', addedItem})
            } else {
                console.log('edit item');
                const editedItem = await ItemService.put(item);
                 dispatch({ type: 'ITEM_UPDATE', editedItem});
            }
        } catch (err) {
            console.log('ITEMS Actions: err in EDIT ITEM');
        }
    }
}



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
            console.log('ItemsActions: err in loadReviews', err);
        }

    }
}



function _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

