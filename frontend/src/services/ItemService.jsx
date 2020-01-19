import HttpService from './HttpService';

export default {
    add,
    query,
    remove,
    get,
    put
};

function query(filterBy) {

    return HttpService.get('item',`?gender=men`);
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
     return  item
}

async function put(editedItem) {  
    const itemToEdit = await HttpService.put(`item/${editedItem._id}` , editedItem);
     return itemToEdit
}

// async function put(shop){
//     const shopUpdate = await HttpService.put(`shop/${shop._id}` , shop)
//     return shopUpdate
// }



