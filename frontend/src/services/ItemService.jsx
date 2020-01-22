import HttpService from './HttpService';

export default {
    add,
    query,
    remove,
    get,
    put
};

function query(filterBy = null) {
    if (filterBy === null) return HttpService.get('item');
    else {
        // debugger;
        let str = '';
        console.log('filterBy-coral', filterBy);
        for (const key in filterBy) {
            console.log('key-coral', key);
            console.log('filterBy-coral', filterBy);
            console.log('filterBy[key]-coral', filterBy[key]);
            
            if (filterBy[key].length === 0) continue
            else {
                if (filterBy[key].length === 1) {
                    if (str !== '') str += '&'
                    str += key + '=' + filterBy[key][0]
                }
                else {
                    filterBy[key].forEach((value) => {
                        if (str !== '') str += '&'
                        str += key + '=' + value
                    })
                }
            }
        }
        console.log('str-coral', `item?${str}`);
        return HttpService.get(`item?${str}`);
        // return HttpService.get('item', `?gender=men`);
    }
}


function remove(itemId) {
    return HttpService.delete(`item/${itemId}`);
}

async function add(item) {
    // console.log('Items action' , item);
    const addeditem = await HttpService.post(`item`, item);
    return addeditem
}


async function get(itemId) {
    const item = await HttpService.get(`item/${itemId}`);
    return item
}


async function put(editedItem) {  
    const itemToEdit = await HttpService.put(`item/${editedItem._id}` , editedItem);
    // console.log(itemToEdit,'updated');
     return itemToEdit

}



// async function put(shop){
//     const shopUpdate = await HttpService.put(`shop/${shop._id}` , shop)
//     return shopUpdate
// }



