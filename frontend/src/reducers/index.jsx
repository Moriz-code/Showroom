import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
import ShopReducer from './ShopReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
    order:  OrderReducer,
    shop: ShopReducer,
    user: UserReducer
})

export default rootReducer;