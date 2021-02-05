import React from 'react'
import {Link} from 'react-router-dom'

const ProductIndexItem = (props) =>{
    return (
        <div className="product-element">
             <Link className ="product-element-click-container" to={`/products/${props.product.id}`}><img src={`${props.product.image_name}`} alt=""/>
            <div className="product-element-body">
                <a className = "product-element-title" to={`/products/${props.product.id}`}><h3>{props.product.name}</h3></a> 
                 <p className="product-element-store">{props.product.store_name}</p> 
            <h4 className="product-element-price">{props.product.price}</h4> 
          </div>
          </Link>
        </div>
    )
}

export default ProductIndexItem