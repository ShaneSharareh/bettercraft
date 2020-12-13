import {RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT} from '../actions/product_actions'


const ProductsReducer = (oldstate = {}, action) =>{
    Object.freeze(oldstate);
    let nextState = Object.assign({}, oldstate);
    switch(action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            nextState[action.product.id] = action.product;
        default:
            return oldstate
    }
}

export default ProductsReducer;