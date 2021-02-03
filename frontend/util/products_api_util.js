export const fetchProducts = products =>(
    $.ajax({
        url: '/api/products/',
        method: 'GET',
    })
);

export const fetchProduct = (productId) =>(
    $.ajax({
        url: `/api/products/${productId}/`,
        method: 'GET',
    })
);

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: {review}
    })
)

export const  fetchReviews = productId => (
    $.ajax({
        url: `/api/products/${productId}/reviews`,
        method: 'GET',
        
    })
)

export const updateReview = review => (
    $.ajax({
        url: `/api/reviews/${review.id}`,
        type: 'PATCH',
        data: {review: review}
    })
)

export const deleteReview = reviewId =>{
    return $.ajax({
        url: `/api/reviews/${reviewId}`,
        type: 'DELETE'
    })
}



