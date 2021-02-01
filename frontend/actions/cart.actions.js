import * as CartAPIUtil from '../util/cart.util';
export const RECEIVE_ALL_CARTED_ITEMS = "RECEIVE_ALL_CARTED_ITEMS"
const receiveCartedItems = cartedItems => ({
    type: RECEIVE_ALL_CARTED_ITEMS,
    cartedItems,
})
export const removeAllCartItems = (cartId) => dispatch =>(
    CartAPIUtil.deleteAllCartItems(cartId).then(cartedItems =>{
        return dispatch(receiveCartedItems(cartedItems))},
      err => {
        return dispatch(receiveErrors(err.responseJSON))
      }
        ));
;