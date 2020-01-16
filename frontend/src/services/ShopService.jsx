import HttpService from './HttpService';

export default {
    get
}

async function get(shopId){
    const shop = await HttpService.get(`shop/${shopId}`)
    return shop
}
