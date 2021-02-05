import * as ProductsApiUtil from '../util/products_api_util';
export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS"
export const RECEIVE_PRODUCT = "RECEIVE_ALL_PRODUCT"
//reviews
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const REMOVE_REVIEW_ERRORS = 'REMOVE_REVIEW_ERRORS';



const receiveProducts = products => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
});


const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
});

export const receiveErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const fetchProducts = () => dispatch =>(
    ProductsApiUtil.fetchProducts()
    .then(products => dispatch(receiveProducts(products)))
)

export const fetchProduct = (productId) => dispatch =>(
    ProductsApiUtil.fetchProduct(productId)
    .then(product => dispatch(receiveProduct(product)))
)


const receiveReviews = reviews =>{
    return { 
        type: RECEIVE_ALL_REVIEWS,
        reviews
    }
}

const receiveReview = review =>{
    return { 
        type: RECEIVE_REVIEW,
        review
    }
}

// const removeReview = reviewId =>{
//     return { 
//         type: REMOVE_REVIEW,
//         reviewId
//     }
// }

export const fetchReviews = (productId) => dispatch => {
    return ProductsApiUtil.fetchReviews(productId)
    .then(reviews => dispatch(receiveReviews(reviews)))
}

export const createReview = review => dispatch => {
    return ProductsApiUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)),  err => {
       return dispatch(receiveErrors(err.responseJSON))
     })
}

export const updateReview = review => dispatch => {
    return ProductsApiUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)))
}


export const deleteReview = reviewId => dispatch => {
    return ProductsApiUtil.deleteReview(reviewId)
    .then(reviews => dispatch(receiveReviews(reviews)))
}

export const removeError =()=>{
  return{
    type: REMOVE_REVIEW_ERRORS
  }
}

