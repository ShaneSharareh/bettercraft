import React from 'react'
import {Link} from 'react-router-dom'



class ProductShow extends React.Component {
    componentDidMount(){
        this.props.fetchProduct(this.props.productId);
    }
    render() {
        const {product} = this.props;
        return(
            product ?
            <div className="product-show">
                <div className ="product-show-content">
                    <div className="product-show-image-container">
                        <img src={`/images/${product.image_name}`} alt=""/>
                    </div>
                    <div className ="product-show-info-container">
                        <p className = "product-show-store">{product.store_name}</p>
                        <h1 className = "product-show-description">{product.description}</h1>
                        <p className = "product-show-price">{product.price}</p>
                        {/* <Link to="/">Home</Link> */}
                    <button>Add To Cart</button>

                    </div>
                </div>
                    <div className ="product-show-reviews">

                    </div>
                

            </div>
            : 
            <div></div>
        )
    }
}

export default ProductShow