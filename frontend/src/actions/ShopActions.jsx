<<<<<<< HEAD
=======

import ShopService from "../services/ShopService";

export function setCurrentItem(itemId) {
    return async (dispatch) => {
        try {
            const item = await ShopService.get(itemId)
            dispatch({ type: 'SET_ITEM', item })
        } catch (err) {
            console.log('ReviewActions: err in loadReviews', err);
        }

    }
}
>>>>>>> cb12bcb3ec05ce9a343367e7b761fa0f61fa870d
