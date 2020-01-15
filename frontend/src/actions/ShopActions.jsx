
import ShopService from '../services/ShopService'

export function loadItems() {
    return async dispatch => {
        try {
            const items = await ShopService.query();
            dispatch(setItems(items));
        } catch (err) {
            console.log('ShopActions: err in loadItems', err);
        }
    }
}

function setItems(items) {
    return {
        type: 'SET_ITEMS',
        items
    }
}

export function setCurrentItem(itemId) {

    return async dispatch => {
        try {
            const item = await ShopService.get(itemId)
            console.log(item);
            
            await dispatch({ type: 'SET_ITEM', item })
        } catch (err) {
            console.log('ReviewActions: err in loadReviews', err);
        }

    }
}

