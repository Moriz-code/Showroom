import ShopService from '../services/ShopService'

export function loadItems() {
    console.log('loadItems');
    let items = [];
    return async dispatch => {
        try {
            const shops = await ShopService.query();
            console.log('shops', shops);

            shops.map(shop => { items.push(shop.items) })
            dispatch(setItems(items))
        } catch (err) {
            console.log('ShopActions: err in loadItems', err);
        }
    }
}

function setItems(items) {
    console.log(items);

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

