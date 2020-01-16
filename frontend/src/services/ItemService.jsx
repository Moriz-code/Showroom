import HttpService from './HttpService';

export default {
    add,
    query,
    remove,
    get
};

function query() {
    console.log('query');
    return HttpService.get('item');
}

function remove(itemId) {
    return HttpService.delete(`item/${itemId}`);
}

async function add(item) {
    const addeditem = await HttpService.post(`item`, item);
    return addeditem
}


async function get(itemId) {
    const item = await HttpService.get(`item/${itemId}`);
    console.log(item, 'itemmm');
    //  return  item
}

