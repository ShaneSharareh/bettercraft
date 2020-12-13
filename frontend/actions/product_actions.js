import * as ProductsApiUtil from '../util/products_api_util';
export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS"
export const RECEIVE_PRODUCT = "RECEIVE_ALL_PRODUCT"

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
