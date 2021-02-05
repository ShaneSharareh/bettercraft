import React from 'react';
import {Link} from 'react-router-dom';
import CartedItemShowContainer from './carted_item_show_container'
import OrderSummaryContainer from '../order_summary/order_summary_container'
import {
  Redirect,
} from 'react-router-dom';
class CartedItems extends React.Component {
    constructor(props) {
    super(props);
    this.state ={
            modalStatus: "modal modal-off",
            confirmStatus: "on",
            continueShoppingStatus: "continueShopping-off"
        }
        this.displayOrderSummary = this.displayOrderSummary.bind(this)
        this.confirmOrder = this.confirmOrder.bind(this)
        this.closeModal = this.closeModal.bind(this)
  }

    componentDidMount() {
        this.props.fetchCartedItems();

    }


    closeModal(){
        //  this.props.removeAllCartItems(Object.values(this.props.cartedItems)[0].cart_id)

        this.setState({
                // modalStatus: "modal modal-on",
                modalStatus: "modal modal-off",
                // continueShoppingStatus: "continueShopping-on"
            })
    }
    
    
     confirmOrder(){
        //  this.props.removeAllCartItems(Object.values(this.props.cartedItems)[0].cart_id)
        location.href='#/'
    }

    displayOrderSummary(){
        this.setState({
                modalStatus: "modal modal-on"
            })

    }
    render() {
        let total = 0.00;
        let discount = 0.15;
        const {cartedItems} = this.props;
        
        return(
            <div className="cart-container">
            <div className="carted-items-container">
                
                <div className ="cart-count"><h1>{Object.values(cartedItems).length} items in your cart</h1></div>
                {
                    cartedItems ?
                     Object.values(cartedItems).map((cartedItem,index) => {
                            
                            console.log(cartedItem.id+" has $"+cartedItem.price)
                            total +=  parseFloat(cartedItem.price.split("$").join("")) * parseFloat(cartedItem.quantity)
                            return( 
                                      <div className="carted-item-container" key={index}>
                                          
                                           <CartedItemShowContainer key={cartedItem.id} productId={cartedItem.product_id} quantity={cartedItem.quantity} cartedItem={cartedItem}/> 
                                        </div>
                         
                            )
                            
                           }

                
                     
                     ) :
                     <div></div>
                }
                
            </div>
              
             <div className= {this.state.modalStatus}>
                <div className="modal-content">
                     <button onClick={this.closeModal} className="order-summary-close-btn">&times;</button>
                        {this.state.modalStatus !== "modal modal-off" ?  
                        
                        
                               <div className ="modal-component-container">
                                   {console.log(this.props.currentUserSession)}
                                 <OrderSummaryContainer currentUserSession={this.props.currentUserSession} cartId = {this.props.cartedItems.cart_id} subtotal={(total - (discount * total)).toFixed(2)} />
                                 <button className="continue-shopping-btn" onClick={this.confirmOrder}>Continue Shopping</button>
                            </div>

                           : 
                            <div> {/* <div>
                                <p>Thank you for your oder</p>
                                <button >ContinueShoppingStatus</button>
                            </div> */}</div>
                           
                        } 

                    </div>

                </div>
                {Object.values(this.props.cartedItems).length > 0 ?
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
                               <div className="cost-field">
                                    <p>Items Total: </p>
                                    <p>${total.toFixed(2)}</p>
                               </div>
                                <div className="cost-field">
                                    <p>Discount: </p>
                                    <p> {discount * 100.00}%</p>
                               </div>
                            </div>
                          <div className ="payment-sub-cost-container">
                               <div className="cost-field">
                                    <p className="payment-subtotal">Subtotal: </p>
                                    <p>${(total - (discount *total)).toFixed(2)}</p>
                               </div>
                               
                            </div>

                        <div className = "payment-footer">
                            <button onClick={this.displayOrderSummary} className ="cart-checkout-button">
                                Proceed to Checkout
                            </button>
                             {/* <Link className = "product-element-title" to={`/products/${props.product.id}`}><h3>{props.product.name}</h3></Link>  */}
                        </div>
                         
                    </div>
                 </div>
                 :
                 <div></div>
                }
            </div>
        )
    }
}
export default CartedItems