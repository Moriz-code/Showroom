const orderService = require('./order.service')
  
// async function getItems(req, res) {
//     console.log(req.query);
//     const orders = await orderService.query(req.query)
//     res.send(orders)
// }

// async function getItem(req, res) {
//     const order = await orderService.getById(req.params.id)
//     res.send(order)
// }


async function addOrder(req, res) {
    
    var order = req.body;
    // order.byUserId = req.session.user._id;
    order = await orderService.add(order)
    // order.byUser = req.session.user;
    // TODO - need to find aboutUser
    // order.aboutUser = {} 
    res.send(order)
}


module.exports = {
    // getItems,
    // getItem,
    addOrder
}