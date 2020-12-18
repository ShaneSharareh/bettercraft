import * as ProductsApiUtil from '../util/products_api_util';
export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS"
export const RECEIVE_PRODUCT = "RECEIVE_ALL_PRODUCT"
//reviews
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveProducts = products => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
});


const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
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

const removeReport = reviewId =>{
    return { 
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const fetchReviews = (productId) => dispatch => {
    return ProductsApiUtil.fetchReviews(productId)
    .then(reviews => dispatch(receiveReviews(reviews)))
}

export const createReview = review => dispatch => {
    return ProductsApiUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
}

export const updateReview = review => dispatch => {
    return ProductsApiUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)))
}


export const deleteReview = reviewId => dispatch => {
    return ProductsApiUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)))
}