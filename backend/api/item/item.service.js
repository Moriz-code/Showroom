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
    let filters;
    const criteria = {};
    if (filterBy.gender) {
        filters = [];
        if (typeof filterBy.gender === 'string') {
            criteria.gender = filterBy.gender
        }
        else {
            filterBy.gender.forEach((value) => {
                filters.push({ 'gender': value })
                
            })
            criteria["$or"] = filters
        }
    }
    if (filterBy.size) {
        filters = [];
        if (typeof filterBy.size === 'string') {
            criteria.size = filterBy.size
        }
        else {
            filterBy.size.forEach((value) => {
                filters.push({ 'size': value })
            })
            criteria["$or"] = filters
        }
    }
    if (filterBy.shop) {
        filters = [];
        if (typeof filterBy.shop === 'string') {
            criteria.shop = filterBy.shop
        }
        else {
            filterBy.shop.forEach((value) => {
                filters.push({ 'shop': value })
            })
            criteria["$or"] = filters
        }
    }
    if (filterBy.price) {
        criteria['price'] = { $lte: +filterBy.price }
    }
    if (filterBy.txt) {
        criteria["$or"] = [{ 'title': { $regex: filterBy.txt } }, { 'description': { $regex: filterBy.txt } }]
    }
    

    return criteria;
}
