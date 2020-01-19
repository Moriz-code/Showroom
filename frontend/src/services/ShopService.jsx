import HttpService from './HttpService';

export default {
    get,
    put
}

async function get(shopId){
    const shop = await HttpService.get(`shop/${shopId}`)
    return shop
}

async function put(shop){
    const shopUpdate = await HttpService.put(`shop/${shop._id}` , shop)
    return shopUpdate
}


// async function put(shopId)