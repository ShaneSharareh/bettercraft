export const fetchCartedItems = cartedItems =>(
    $.ajax({
        url: '/api/carted_items/',
        method: 'GET'
    })
);

export const createCartedItem = (cartedItem) =>{
     $.ajax({
         url: `/api/products/${cartedItem.product_id}/carted_items`, 
         method: 'POST',
        data: {cartedItem}
    })
}


export const deleteCartedItem = () =>{
     $.ajax({
         url: `/api/carted_items`, 
         method: 'DELETE'
    })
}