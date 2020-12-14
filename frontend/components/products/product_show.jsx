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
                    <img src={`/images/${product.image_name}`} alt=""/>
                    <div className = "product-show-detail">
                        <p>{product.store_name}</p>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p>{product.price}</p>

                        <Link to="/">Home</Link>

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