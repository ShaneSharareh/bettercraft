import React from 'react'
import {Link} from 'react-router-dom'
import 'regenerator-runtime/runtime'
import ReviewIndexItem from '../Review/review_index_item';


class CartedItemShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.cartedItem.id,
            quantity: 1
        }
        this.setQuantityPerProudct = this.setQuantityPerProudct.bind(this)
       this.removeCartedItem = this.removeCartedItem.bind(this)
    }
    componentDidMount(){
        this.props.fetchProduct(this.props.productId);

        // this.props.fetchCartedItem(this.props.cartedItem.id);
    }

   removeCartedItem(){
        this.props.removeCartedItem(this.props.product.id)
    }

      async setQuantityPerProudct(e){
        
        // console.log("quantity: "+this.state.quantity)
         //alert(this.state.quantity)
         await this.setState({
                quantity: parseInt(e.currentTarget.value)
            })
        console.log("this is quantity "+this.state.quantity)
        this.props.updateCartedItem(this.state);
 

     }
  
    render() {
        const {product} = this.props;
        
        return(
            this.props.product ?

            <div>
             <div className="carted-item-header">
                                    <h1 className ="carted-item-storename">{product.store_name}</h1>
                                        </div> 
                                        <div className="carted-item-body">
                                             <div className = "carted-item-description">
                                                <div className = "carted-item-image-placeholder">
                                                    <img className="carted-item-image" src={product.image_name}/>
                                                </div>
                                                <div className = "carted-item-description-text">
                                                    <Link className ="carted-item-name-link" to={`/products/${product.id}`}><h1 className="carted-item-name">{product.name}</h1></Link>
                                                    <p className="carted-item-shipping"> {product.shipping==="FREE" ?  <span className="free-shipping-status-background"> Shipping: {product.shipping}</span> : <span className="paid-shipping-status-background"> Shipping: {product.shipping}</span> } </p>
                                                    <button onClick={ this.removeCartedItem} className ="delete-carted-item">Remove</button>
                                               <div className = "carted-item-description-footer">
                                                   </div>
                                               </div>
                                                <div className ="quanity-per-product-container">
                                                    <select   value={this.props.quantity}  onChange={this.setQuantityPerProudct} className="quanity-per-product" name="quanity-per-product" id="quantity-per-product"   defaultValue="{{ label: this.props.quantity, value: this.props.quantity }}">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        </select>
                                                </div>
                                            </div>
                                                {/* <p>{product.price}</p> */}
                                               <p>{(parseFloat(product.price.split("$").join(""))  * parseFloat(this.props.quantity)).toFixed(2) }</p>
                                                 {this.props.quantity>1 ? <div><p>({product.price} for each) </p> </div> : <div></div>}
                                        </div> 
                                        </div>     
                                  

                                                     
              :
              <div></div>              
        )
    }
}

export default CartedItemShow