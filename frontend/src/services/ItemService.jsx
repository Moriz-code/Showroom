import HttpService from './HttpService';

export default {
    add,
    query,
    remove,
    get,
    put
};

function query(filterBy = null) {
    console.log('check filter3', filterBy);

    if (filterBy === null) return HttpService.get('item');
    else {
        // debugger;
        let str = '';
        for (const key in filterBy) {
            console.log('filterby-theend', filterBy);

            console.log('coral is checking', filterBy[key]);
            // if(key==='txt'||key==='price') return HttpService.get(`item?${key}=${filterBy[key]}`);
            if (filterBy[key].length === 0) continue
            else {
                if (filterBy[key].length === 1||typeof filterBy[key]==='string') {
                    if (str !== '') str += '&'
                    if (key === 'txt' || key === 'price') {
                        str += key + '=' + filterBy[key]
                    } else str += key + '=' + filterBy[key][0]
                }
                else {
                    filterBy[key].forEach((value) => {
                        if (str !== '') str += '&'
                        str += key + '=' + value
                    })
                }
            }
        }
        console.log("`item?${str}`",`item?${str}`);
        
        return HttpService.get(`item?${str}`);
    }
}


function remove(itemId) {
    return HttpService.delete(`item/${itemId}`);
}

async function add(item) {
    console.log('Items action', item);
    const addeditem = await HttpService.post(`item`, item);
    return addeditem
}


async function get(itemId) {
    const item = await HttpService.get(`item/${itemId}`);
    return item
}


async function put(editedItem) {
    const itemToEdit = await HttpService.put(`item/${editedItem._id}`, editedItem);
    console.log(itemToEdit, 'updated');
    return itemToEdit

}

// async function put(shop){
//     const shopUpdate = await HttpService.put(`shop/${shop._id}` , shop)
//     return shopUpdate
// }



