import HttpService from './HttpService';

export default {
    getByItemId
}

async function getByItemId(itemId){
    const foundItem = items.find(item => item._d === itemId)
    const shop = await HttpService.get(`shop/${itemId}`)
    return shop
}


