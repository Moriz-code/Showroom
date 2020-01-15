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