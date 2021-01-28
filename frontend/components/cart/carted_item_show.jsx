import React from 'react'
import {Link} from 'react-router-dom'
import ReviewIndexItem from '../Review/review_index_item';


class CartedItemShow extends React.Component {
    constructor(props) {
        super(props);
       
    }
    componentDidMount(){
        this.props.fetchCartedItem(this.props.cartedItemID);
    }
  
    render() {
        const {cartedItem,} = this.props;
        
        return(
            cartedItem ?
            <div>
                <h1>Cattle</h1>
            </div>
            // <div className="product-show">
            //     <div className ="product-show-content">
            //         <div className="product-show-image-container">
            //             <img src={`${cartedItem.image_name}`} alt=""/>
            //         </div>
            //         <div className ="product-show-info-container">
            //             <p className = "product-show-store">{cartedItem.store_name}</p>
            //             <p className = "product-show-description">{cartedItem.description}</p>
            //             <p className = "product-show-price">{cartedItem.price}</p>
            //             {/* <Link to="/">Home</Link> */}
            //           {/* <form onSubmit={this.handleAddCart}>
            //                 <input className = "add-cart-btn" type="submit" value="Add to Cart"/>
            //               </form> */}
            //         </div>
            //     </div>
                   

            // </div>
            :
            <div></div>
        )
    }
}

export default CartedItemShow