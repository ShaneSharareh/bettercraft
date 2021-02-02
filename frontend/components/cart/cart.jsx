import React from 'react';
import CartedItemShowContainer from './carted_item_show_container'

class Cart extends React.Component {
    constructor(props) {
    super(props);
  }

    componentDidMount() {
        this.props.fetchCartedItems();
    }

    
    render() {
       
        const {cartedItems} = this.props;
         return(
            this.props.loggedInUser.id !== null && cartedItems ? 
            <div className ="shopping-cart-icon-container">

                 <p><a href="#/cart"> &#128722;</a></p>
                 <p className="shopping-cart-count">{Object.keys(cartedItems).length}</p>
             
            </div>
            :
            <div></div>
         )
    }
}
export default Cart