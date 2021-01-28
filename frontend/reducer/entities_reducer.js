import { combineReducers } from "redux";
import usersReducer from "./user_reducer";
import productsReducer from "./products_reducer";
import reviewsReducer from "./reviews_reducer";
import cartedItemsReducer from "./carted_items_reducer";


const  entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  cartedItems: cartedItemsReducer
});

export default entitiesReducer