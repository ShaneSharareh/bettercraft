import React from 'react'
import {Link} from 'react-router-dom'

const ProductIndexItem = (props) =>{
    return (
        <div className="product-element">
            <img src={`/images/${props.product.image_name}`} alt=""/>
            <div className="product-element-body">
                <Link className = "product-element-title" to={`/products/${props.product.id}`}><h3>{props.product.name}</h3></Link> 
                 <p className="product-element-store">{props.product.store_name}</p> 
            <h4 className="product-element-price">{props.product.price}</h4> 
          </div>
        </div>
    )
}

export default ProductIndexItem