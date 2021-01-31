import React from 'react'
import {Link} from 'react-router-dom'
import ReviewIndexItem from '../Review/review_index_item';


class CartedItemShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantityPerProduct: 1
        }
        this.setQuantityPerProudct = this.setQuantityPerProudct.bind(this)
       
    }
    componentDidMount(){
        // this.props.fetchCartedItem(this.props.cartedItem.id);
    }

     setQuantityPerProudct(e){
        
         console.log("quantity: "+this.state.quantityPerProduct)
         //alert(this.state.quantityPerProduct)
        this.setState({
                quantityPerProduct: parseInt(e.currentTarget.value)
            })


     }
  
    render() {
        const {cartedItem} = this.props;
        
        return(
            <div>
             <div className="carted-item-header">
                                    <h1 className ="carted-item-storename">{cartedItem.store_name}</h1>
                                        </div> 
                                        <div className="carted-item-body">
                                             <div className = "carted-item-description">
                                                <div className = "carted-item-image-placeholder">
                                                    <img className="carted-item-image" src={cartedItem.image_name}/>
                                                </div>
                                                <div className = "carted-item-description-text">
                                                    <Link className ="carted-item-name-link" to={`/products/${cartedItem.id}`}><h1 className="carted-item-name">{cartedItem.name}</h1></Link>
                                                    <p className="carted-item-shipping"> {cartedItem.shipping==="FREE" ?  <span className="free-shipping-status-background"> Shipping: {cartedItem.shipping}</span> : <span className="paid-shipping-status-background"> Shipping: {cartedItem.shipping}</span> } </p>
                                                    <button onClick={ ()=> this.props.removeCartedItem(cartedItem.id)} className ="delete-carted-item">Remove</button>
                                               <div className = "carted-item-description-footer">
                                                   </div>
                                               </div>
                                                <div className ="quanity-per-product-container">
                                                    <select   onChange={this.setQuantityPerProudct} className="quanity-per-product" name="quanity-per-product" id="quantity-per-product">
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
                                                {/* <p>{cartedItem.price}</p> */}
                                               <p>{(parseFloat(cartedItem.price.split("$").join(""))  * parseFloat(this.state.quantityPerProduct)).toFixed(2) }</p>
                                                 {this.state.quantityPerProduct>1 ? <div><p>({cartedItem.price} for each) </p> </div> : <div></div>}
                                        </div> 
                                        </div>     
                                  

                                                     
                            
        )
    }
}

export default CartedItemShow