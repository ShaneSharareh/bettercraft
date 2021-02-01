
export const deleteAllCartItems = (cartId) => (
    $.ajax({
        url: `/api/carts/${cartId}`,
        method: 'DELETE',
    })
);
