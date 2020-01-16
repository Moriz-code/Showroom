import ShopService from '../services/ShopService';

export function loadShopByItemId(itemId) {
    return async dispatch => {
        try {
            const shop = await ShopService.getByItemId(itemId);
            dispatch(setShop(shop));    
        } catch (err) {
            console.log(`cant get shop ${shopId}`);
        }
    }

}


function setShop(shop) {
    return {
        type: 'SET_SHOP',
        shop
    }
}







