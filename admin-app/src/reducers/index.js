import authReducer from './auth.reducers';
import userReducer from './user.reducers';
import orderReducer from './order.reducers';
import productReducer from './product.reducers';
import categoryReducer from './category.reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    order: orderReducer
});

export default rootReducer;