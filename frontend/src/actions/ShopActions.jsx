// // import ShopService from '../services/ShopService'
// import ItemService from '../services/ItemService'

// export function loadItems() {
//     console.log('loadItems');
//     // let items = [];
//     return async dispatch => {
//         try {
//             const items = await ItemService.query();
//             console.log('items', items);

//             // shops.map(shop => { items.push(shop.items) })
//             dispatch(setItems(items))
//         } catch (err) {
//             console.log('ShopActions: err in loadItems', err);
//         }
//     }
// }

// function setItems(items) {
//     console.log(items);

//     return {
//         type: 'SET_ITEMS',
//         items
//     }
// }

// export function setCurrentItem(itemId) {

//     return async dispatch => {
//         try {
//             const shop = await ShopService.query();

//             const shopItems = shop[0].items
//             const item = shopItems.find(item => item.id === itemId)

//             // const item = await ShopService.get(itemId)
//             // console.log(item);

//             await dispatch({ type: 'SET_ITEM', item })
//         } catch (err) {
//             console.log('ReviewActions: err in loadReviews', err);
//         }

//     }
// }
