import HttpService from './HttpService';

export default {
    add,
    query,
    remove,
    get
};

function query(filterBy) {
    let str = '';
    console.log('filterBy-coral', filterBy);
    for (const key in filterBy) {
        if (str !== '') str += '&'
        if (filterBy[key].length !== 0) {
            if (filterBy[key].length === 1)
                str += key + '=' + filterBy[key][0]
        } else {
            filterBy[key].forEach((value) => {
                str += key + '=' + value
            })
        }
        console.log('str-coral',str);
        
    }
    return HttpService.get('item?', str);
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
    return item
}

