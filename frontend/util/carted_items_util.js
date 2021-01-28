export const fetchCartedItems = () =>(
    $.ajax({
        url: '/api/carted_items/',
        method: 'GET'
    })
);

export const createCartedItem = (cartedItem) =>{
     $.ajax({
         url: `/api/carted_items`, 
         method: 'POST',
        data: {cartedItem}
    })
}

export const fetchCartedItem = (cartedItemID) =>(
    $.ajax({
        url: `/api/carted_items/${cartedItemID}/`,
        method: 'GET',
    })
);

