import * as CartedItemsAPIUtil from '../util/carted_items_util';

export const RECEIVE_ALL_CARTED_ITEMS = "RECEIVE_ALL_CARTED_ITEMS"
export const RECEIVE_CARTED_ITEM = "RECEIVE_CARTED_ITEM"
export const RECEIVE_CART_ERRORS = 'RECEIVE_CART_ERRORS';
export const REMOVE_CARTED_ITEM = "REMOVE_CARTED_ITEM";


const receiveCartedItems = cartedItems => ({
    type: RECEIVE_ALL_CARTED_ITEMS,
    cartedItems,
})
const receiveCartedItem = cartedItem => ({
    type: RECEIVE_CARTED_ITEM,
    cartedItem
});



export const receiveErrors = errors => ({
  type: RECEIVE_CART_ERRORS,
  errors
});

export const createCartedItem = cartedItem => dispatch =>(
    CartedItemsAPIUtil.createCartedItem(cartedItem).then(cartedItem =>{
        return dispatch(receiveCartedItem(cartedItem))},
        err => {
        return dispatch(receiveErrors(err.responseJSON))
        }
        ));


export const fetchCartedItems = () => dispatch =>(
    CartedItemsAPIUtil.fetchCartedItems().then(cartedItems =>{
        return dispatch(receiveCartedItems(cartedItems))},
      err => {
        return dispatch(receiveErrors(err.responseJSON))
      }
        ));

  
export const fetchCartedItem = (cartedItemID) => dispatch =>(
    CartedItemsAPIUtil.fetchCartedItem(cartedItemID)
    .then(cartedItem => dispatch(receiveCartedItem(cartedItem)))
)

// export const removeCartedItem = (cartedID) => dispatch =>(
//     APIUtil.deleteCartedItem().then(cartedItem =>(
//         dispatch(removeCartedItem())
//     )) 
// );

// export const removeError =()=>{
//   return{
//     type: REMOVE_ERROR
//   }
// }


