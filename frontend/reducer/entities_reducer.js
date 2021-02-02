import { combineReducers } from "redux";
import usersReducer from "./user_reducer";
import productsReducer from "./products_reducer";
import reviewsReducer from "./reviews_reducer";
import cartedItemsReducer from "./carted_items_reducer";
import cartedItemsErrorsReducer from "./carted_items_errors_reducer"
import reviewUserReducer from "./review_user_reducer"

const  entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  reviewUser: reviewUserReducer,
  cartedItems: cartedItemsReducer,
  cartedItemsErrors: cartedItemsErrorsReducer

});

export default entitiesReducer