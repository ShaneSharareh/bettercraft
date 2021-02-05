import * as CartedItemsAPIUtil from '../util/carted_items_util';

export const RECEIVE_ALL_CARTED_ITEMS = "RECEIVE_ALL_CARTED_ITEMS"
export const RECEIVE_CARTED_ITEM = "RECEIVE_CARTED_ITEM"
export const REMOVE_CARTED_ITEM = "REMOVE_CARTED_ITEM";
export const RECEIVE_CARTED_ITEM_ERRORS = 'RECEIVE_CARTED_ITEM_ERRORS';
export const REMOVE_CARTED_ITEM_ERRORS = 'REMOVE_CARTED_ITEM_ERRORS';

const receiveCartedItems = cartedItems => ({
    type: RECEIVE_ALL_CARTED_ITEMS,
    cartedItems,
})
const receiveCartedItem = cartedItem => ({
    type: RECEIVE_CARTED_ITEM,
    cartedItem
});

export const receiveCartedItemErrors = errors => ({
  type: RECEIVE_CARTED_ITEM_ERRORS,
  errors
});



export const createCartedItem = cartedItem => dispatch =>(
     CartedItemsAPIUtil.createCartedItem(cartedItem).then(cartedItems =>{
         return dispatch(receiveCartedItems(cartedItems))},
        err => {
       return dispatch(receiveCartedItemErrors(err.responseJSON))
     }
     
        ));


export const fetchCartedItems = () => dispatch =>(
    CartedItemsAPIUtil.fetchCartedItems().then(cartedItems =>{
        return dispatch(receiveCartedItems(cartedItems))},
      // err => {
      //   return dispatch(receiveCartedItemErrors(err.responseJSON))
      // }
        ));

  
export const fetchCartedItem = (cartedItemID) => dispatch =>(
    CartedItemsAPIUtil.fetchCartedItem(cartedItemID)
    .then(cartedItem => dispatch(receiveCartedItem(cartedItem)))
)

export const removeCartedItem = (cartedID) => dispatch =>(
    CartedItemsAPIUtil.deleteCartedItem(cartedID).then(cartedItems =>{
        return dispatch(receiveCartedItems(cartedItems))},
      err => {
        return dispatch(receiveCartedItemErrors(err.responseJSON))
      }
        ));


export const updateCartedItem = cartedItem => dispatch =>(
     CartedItemsAPIUtil.updateCartedItem(cartedItem).then(cartedItems =>{
        return dispatch(receiveCartedItems(cartedItems))},
      err => {
        return dispatch(ReceiveCartedItemErrors(err.responseJSON))
      }
        ));


export const removeCartedItemErrors =()=>{
  return{
    type: REMOVE_CARTED_ITEM_ERRORS
  }
}


