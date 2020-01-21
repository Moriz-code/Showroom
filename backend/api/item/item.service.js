const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


module.exports = {
    query,
    getById,
    remove,
    update,
    add
}



async function query(filterBy = {}) {
    const criteria = await _buildCriteria(filterBy)

    const collection = await dbService.getCollection('item')
    try {
        let items;
        items = await collection.find(criteria).toArray();

        // items.forEach(item => delete item.password);

        return items
    } catch (err) {
        console.log('ERROR: cannot find items')
        throw err;
    }
}

async function getById(itemId) {
    const collection = await dbService.getCollection('item')
    try {
        const item = await collection.findOne({ "_id": ObjectId(itemId) })
        return item
    } catch (err) {
        console.log(`ERROR: while finding item ${itemId}`)

        throw err;

         }
}

async function remove(itemId) {
    const collection = await dbService.getCollection('item')
    try {
        await collection.deleteOne({ "_id": ObjectId(itemId) })
    } catch (err) {
        console.log(`ERROR: cannot remove item ${itemId}`)
        throw err;
    }
}

async function update(item) {
    const collection = await dbService.getCollection('item')
    item._id = ObjectId(item._id);

    try {
        await collection.replaceOne({ "_id": item._id }, { $set: item })
        return item
        
    } catch (err) {
        console.log(`ERROR: cannot update item ${item._id}`)
        throw err;
    }
}

async function add(item) {
    const collection = await dbService.getCollection('item')
    try {
        await collection.insertOne(item);
        return item;
    } catch (err) {
        console.log(`ERROR: cannot insert item`)
        throw err;
    }
}





function _buildCriteria(filterBy) {

    const criteria = {};

    //     if (filterBy.gender) {
    //         let str = [];
    //         if (typeof filterBy.gender === 'string') {
    //             criteria.gender = filterBy.gender
    //         }
    //         else {
    //             filterBy.gender.forEach((value) => {
    //                 str.push({ 'gender': value })
    //             })
    //             criteria["$or"] = str
    //         }
    //     }
    //     if (filterBy.size) {
    //         let str = [];
    //         if (typeof filterBy.size === 'string') {
    //             criteria.size = filterBy.size
    //         }
    //         else {
    //             filterBy.size.forEach((value) => {
    //                 str.push({ 'size': value })
    //             })
    //             criteria["$or"] = str
    //         }
    //     }
    //     if (filterBy.shop) {
    //         let str = [];
    //         if (typeof filterBy.shop === 'string') {
    //             criteria.shop = filterBy.shop
    //         }
    //         else {
    //             filterBy.shop.forEach((value) => {
    //                 str.push({ 'shop': value })
    //             })
    //             criteria["$or"] = str
    //         }
    //     }
    //     if (filterBy.price) {
    //         if (Array.isArray(filterBy.price) && filterBy.price.length > 1) {

    //             // filterBy.price.splice(1, filterBy.price-1)
    //             console.log('filterBy.pricefilterBy.pricefilterBy.price',filterBy.price.splice(1, (filterBy.price)));

    //         }
    //         let res = (filterBy.price).split(' ')
    //         criteria["$and"] = [{ 'price': { "$gte": parseInt(res[0]) } }, { 'price': { "$lte": parseInt(res[1]) } }]
    //     }
    //     if (filterBy.txt) {
    //         criteria.username = filterBy.txt
    //     }
    //     return criteria;
    // }


    for (let key in filterBy) {
        switch (key) {
            case 'gender':
            case 'size':
            case 'shop':
                if (filterBy[key]) {
                    let str = [];
                    if (typeof filterBy[key] === 'string') {
                        criteria[key] = filterBy[key]
                    }
                    else {
                        filterBy[key].forEach((value) => {
                            str.push({ [key]: value })
                        })
                        criteria["$or"] = str
                    }
                }
            case 'price':
                if (filterBy.price) {
                    if (Array.isArray(filterBy.price) && filterBy.price.length > 1) {
                        filterBy.price.splice(1, filterBy.price - 1)
                        console.log('filterBy.pricefilterBy.pricefilterBy.price', filterBy.price.splice(1, (filterBy.price)));
                    } else {
                        let res = (filterBy.price).split(' ')
                        res = [res]
                    }
                    criteria["$and"] = [{ 'price': { "$gte": parseInt(res[0]) } }, { 'price': { "$lte": parseInt(res[1]) } }]
                }
        }
        return criteria;
    }
}

