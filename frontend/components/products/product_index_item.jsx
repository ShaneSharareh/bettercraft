import React from 'react'
import {Link} from 'react-router-dom'

const ProductIndexItem = (props) =>{
    return (
        <div className="product-element">
            <img src={`/images/${props.product.name}.jpeggit`} alt=""/>
            <Link to={`/products/${props.product.id}`}>{props.product.name}</Link> 
        </div>
    )
}

export default ProductIndexItem