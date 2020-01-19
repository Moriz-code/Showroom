const itemService = require('./item.service')
  
async function getItems(req, res) {
    console.log('req',req);

    console.log('filter',req.query);
    const items = await itemService.query(req.query)
    res.send(items)
}


module.exports = {
    getItems
}