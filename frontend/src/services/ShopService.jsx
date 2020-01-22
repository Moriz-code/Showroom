import HttpService from './HttpService';

export default {
    get,
    put,
    // add
}

async function get(shopId){
    const shop = await HttpService.get(`shop/${shopId}`)
    return shop
}

async function put(shop){
    const shopUpdate = await HttpService.put(`shop/${shop._id}` , shop)
    return shopUpdate
}

// async function put(shop){
//     const shopUpdate = await HttpService.put(`shop/${shop._id}` , shop)
//     return shopUpdate
// }


// async function add(item) {
//     console.log('Items action' , item);
//     const addeditem = await HttpService.post(`item`, item);
//     return addeditem
// }



// async function put(shopId)