import React from 'react';
import CartedItemShowContainer from './carted_item_show_container'
class CartedItems extends React.Component {
    constructor(props) {
    super(props);

  }

    componentDidMount() {
        this.props.fetchCartedItems();

    }

    render() {
        const {cartedItems} = this.props;
        
        return(
            <div className="cart-container">
            <div className="carted-items-container">

                <div className ="cart-count"><h1>{Object.values(cartedItems).length} items in your cart</h1></div>
                {
                    cartedItems ? 
                     Object.values(cartedItems).map((cartedItem,index) => {

                            return(  <div className="carted-item-container" key={index}>
                                    
                                        <div className="carted-item-header">
                                            <h1 className ="carted-item-storename">{cartedItem.store_name}</h1>
                                        </div> 
                                        <div className="carted-item-body">
                                             <div className = "carted-item-description">
                                                <div className = "carted-item-image-placeholder">
                                                    <img className="carted-item-image" src={cartedItem.image_name}/>
                                                </div>
                                                <div className = "carted-item-description-text">
                                               <h1 className="carted-item-name">{cartedItem.name}</h1>
                                               <div className = "carted-item-description-footer">
                                                   </div>
                                               </div>
                                                <div className ="quanity-per-product-container">
                                                    <select className="quanity-per-product" name="quanity-per-product" id="quantity-per-product">
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
                                               <p>{cartedItem.price}</p>
                                              
                                        </div> 
                                        </div>     
                                  

                                                     
                            )
                           }

                
                     
                     ) :
                     <div></div>
                }
                
            </div>
                <div className="payment-container">
                    <div className = "payment-container-header">
                        <h1>How you will pay</h1>
                     </div>
                     <div className = "payment-container-body">
                            <div className = "payment-container-radio-container">
                                <div className="payment-container-radio-input">
                                    <input type="radio" id="male" name="gender" value="male"/>
                                    <ul className="card-list">
                                        <li className="card-list-item"><i className="text-muted fa fa-cc-visa fa-2x"></i></li>
                                        <li className="card-list-item"><i className="fa fa-cc-mastercard fa-2x"></i></li>
                                        <li className="card-list-item"><i className="fa fa-cc-amex fa-2x"></i></li>
                                        <li className="card-list-item"><i className="fa fa-cc-discover fa-2x"></i></li>
                                    </ul>
                                </div >
                                  <div className="payment-container-radio-input">
                                    <input type="radio" id="male" name="gender" value="male"/>
                                      <ul className="card-list">
                                        <li className="card-list-item"><i className="text-muted fa fa fa-cc-paypal fa-2x"></i></li>
                                    </ul>
                                </div>
                                  <div className="payment-container-radio-input">
                                    <input type="radio" id="male" name="gender" value="male"/>
                                     <ul className="card-list">
                                        <li className="card-list-item"><i className="text-muted fa fa-google-wallet fa-2x"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className ="payment-cost-container">
                                <p>Items Total: </p>
                                <p>$25.00</p>
                            </div>
                    </div>
                 </div>
            </div>
        )
    }
}
export default CartedItems