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


function setShop(shop) {
    return {
        type: 'SET_SHOP',
        shop
    }
}



export function updateShopSettings(shop) {
    return async dispatch => {
        try {
            const shopToUpdate = await ShopService.put(shop);
            await dispatch({ type: 'SET_SETTINGS', shopToUpdate})
        } catch (err) {
            console.log(`cant get shop - shop action ${shop._id}`);
        }
    }

}

// function setSettings(shop) {
//     return {

//     }
// }



// export function setCurrentItem(itemId) {
//     return async dispatch => {
//         try {
//             const item = await ItemService.get(itemId);
//             await dispatch({ type: 'SET_ITEM', item })
//         } catch (err) {
//             console.log('ReviewActions: err in loadReviews', err);
//         }

//     }
// }


