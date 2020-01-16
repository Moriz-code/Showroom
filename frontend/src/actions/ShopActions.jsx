import ShopService from '../services/ShopService';

export function loadShop(shopId) {
    return async dispatch => {
        try {
            const shop = await ShopService.get(shopId);
            dispatch(setShop(shop));
        } catch (err) {
            console.log(`cant get shop ${shopId}`);
        }
    }

}

function setShop(shop){
    return {
        type: 'SET_SHOP',
        shop
    }
}



