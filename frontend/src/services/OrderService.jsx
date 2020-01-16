import StorageService from './StorageService';

export default {
    addItemtoCart,
    getOrder,
    removeItemFromCart
};


async function addItemtoCart(item) {
    const addeditem = await StorageService.post(`order`, item);
    return addeditem
}

async function getOrder() {
    const itemsInCart = await StorageService.query(`order`);
    return itemsInCart
}

async function removeItemFromCart(item) {
    const items = await StorageService.remove(`order`, item);
    return items

}