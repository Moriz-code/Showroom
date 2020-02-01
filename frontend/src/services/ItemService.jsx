import HttpService from './HttpService';

export default {
    add,
    query,
    remove,
    get,
    put,
    getNewItem
};

function query(filterBy = null) {
    console.log('item-service3',filterBy);
    // debugger;
    if (filterBy === null) return HttpService.get('item');
    else {
        let str = '';
        for (const key in filterBy) {
            console.log('item-service4',filterBy[key].length);
            console.log('key',key);
            
            if (filterBy[key].length === 0) continue
            else {
                if (filterBy[key].length === 1||typeof filterBy[key]==='string'||typeof filterBy[key]==='number') {
                    if (str !== '') str += '&'
                    console.log('trytrytry');
                    
                    if (key === 'txt' || key === 'price'||key==='labels'||key==='itemOwner') {
                        str += key + '=' + filterBy[key]
                        console.log('item-service5',str);
                        
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
        console.log('query-str6',str);
        
        return HttpService.get(`item?${str}`);
    }
}


function remove(itemId) {
    return HttpService.delete(`item/${itemId}`);
}

async function add(item) {

    const addeditem = await HttpService.post('item', item);

    return addeditem
}


async function get(itemId) {
    const item = await HttpService.get(`item/${itemId}`);
    return item
}



async function put(editedItem) {  
    const itemToEdit = await HttpService.put(`item/${editedItem._id}` , editedItem);
   
     return itemToEdit

}


function getNewItem() {
    return {
        _id: '',
        title: '',
        price: null,
        description: '',
        sizeFit: '',
        size: '',
        gender: '',
        itemOwner: {
            //need to change the source that it came from - keep in session. ask tal.
            id: '',
            name: '',
            logoUrl: ''
        },
        labels: [],
        imgs: [null , null , null],
        reviews: []
    }
}



// async function put(shop){
//     const shopUpdate = await HttpService.put(`shop/${shop._id}` , shop)
//     return shopUpdate
// }



