import React from 'react';
import GreetingContainer from "./greeting_container";
import SignupContainer from './session_form/signup_container'
import LoginContainer  from './session_form/login_form_container'
import ProductIndexContainer from './products/product_index_container'
import ProductShowContainer from './products/product_show_container'
import SearchIndexContainer from './search/search_index_container'

import Modal from './modal';
import CartContainer from './cart/cart_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import CartedItemsContainer from './cart/carted_items_container'
import Search from './search/search'

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div className="body-container">
    <div className="fixed-header">
      <div className="empty-div"></div>
    
    <div className="header-content">
   <Modal />
    <div className ="header">
       <Link className ="logo" to="/">BetterCraft</Link>
      <Search/>
      <div className = "header-right">
        <GreetingContainer/>
          <CartContainer/>


      </div>
    </div>
    <div className = "nav">
      <ul className = "nav-ul">
        <li><a href="#/Holiday-Shop"> Holiday Shop</a></li>
        <li><a href="#/Jewelry-Accessories">Jewelry & Accessories</a></li>
        <li><a href="#/Clothing-Shoes">Clothing & Shoes</a></li>
        <li><a href="#/Home-Living">Home & Living</a></li>
        <li><a href="#/Wedding-Party">Wedding & Party</a></li>
        <li><a href="#/Toys-Entertainment">Toys & Entertainment</a></li>
        <li><a href="#/Art-Collectibles">Art & Collectibles</a></li>
        <li><a href="#/Craft-Supplies">Craft Supplies</a></li>
        <li><a href="#/Gifts-Gift-Cards">Gifts & Gift Cards</a></li>
      </ul>
    </div>
    </div>
  </div>
    <div className="container">
     
      <Switch>
        {/* Search */}
       <Route exact path="/search/:searchedWord" component={SearchIndexContainer} />
       {/* Categories */}
       <Route exact path="/Holiday-Shop" component={ProductIndexContainer} />
       <Route exact path="/Jewelry-Accessories" component={ProductIndexContainer} />
       <Route exact path="/Clothing-Shoes" component={ProductIndexContainer} />
       <Route exact path="/Home-Living" component={ProductIndexContainer} />
       <Route exact path="/Wedding-Party" component={ProductIndexContainer} />
       <Route exact path="/Toys-Entertainment" component={ProductIndexContainer} />
       <Route exact path="/Art-Collectibles" component={ProductIndexContainer} />
       <Route exact path="/Craft-Supplies" component={ProductIndexContainer} />
       <Route exact path="/Gifts-Gift-Cards" component={ProductIndexContainer} />
       <Route exact path="/cart" component={CartedItemsContainer} />
        {/* product show page */}
       <Route exact path="/products/:productId" component={ProductShowContainer} />
       {/*  retrieve all items */}
       <Route exact path="/" component={ProductIndexContainer } />
       <Redirect to="/" />

      </Switch>
      
    </div>
    
    {/* <AuthRoute exact path="/signup" component={SignupContainer} />
    <AuthRoute exact path="/login" component={LoginContainer} /> */}

  </div>
);


export default App