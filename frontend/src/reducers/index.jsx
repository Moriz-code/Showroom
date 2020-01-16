import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
import ShopReducer from './ShopReducer';
import UserReducer from './UserReducer';
import ItemReducer from './ItemReducer';

const rootReducer = combineReducers({
    item: ItemReducer,
    order: OrderReducer,
    shop: ShopReducer,
    user: UserReducer
})

export default rootReducer;