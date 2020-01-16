
import ItemService from '../services/ItemService'

export function loadItems() {
    return async dispatch => {
        try {
            const items = await ItemService.query();
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

export function setCurrentItem(itemId) {

    return async dispatch => {
        try {
            const shop = await ItemService.query();
     
            const shopItems=shop[0].items
            const item=shopItems.find(item=>item.id===itemId)

            // const item = await ShopService.get(itemId)
            // console.log(item);
            
            await dispatch({ type: 'SET_ITEM', item })
        } catch (err) {
            console.log('ReviewActions: err in loadReviews', err);
        }

    }
}

