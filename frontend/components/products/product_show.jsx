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
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <Link to="/">Home</Link>
            </div>
            : 
            <div></div>
        )
    }
}

export default ProductShow