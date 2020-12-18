import React from 'react';
import GreetingContainer from "./greeting_container";
import SignupContainer from './session_form/signup_container'
import LoginContainer  from './session_form/login_form_container'
import ProductIndexContainer from './products/product_index_container'
import ProductShowContainer from './products/product_show_container'

import Modal from './modal';

import {AuthRoute, ProtectedRoute} from '../util/route_util'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';



const App = () => (
  <div>
   <Modal />
    <div className ="header">
       <Link className ="logo" to="/">BetterCraft</Link>
       <div className="search-container">
          <form className = "search-form">
            <input className="search-holder" type="text" placeholder="Search for anything" name="search"/>
          </form>
      </div>
      <div className = "header-right">
      <GreetingContainer/>
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
    
    <div className="container">
     
      <Switch>
       <Route exact path="/Holiday-Shop" component={ProductIndexContainer} />
       <Route exact path="/Jewelry-Accessories" component={ProductIndexContainer} />
       <Route exact path="/Clothing-Shoes" component={ProductIndexContainer} />
       <Route exact path="/Home-Living" component={ProductIndexContainer} />
       <Route exact path="/Wedding-Party" component={ProductIndexContainer} />
       <Route exact path="/Toys-Entertainment" component={ProductIndexContainer} />
       <Route exact path="/Art-Collectibles" component={ProductIndexContainer} />
       <Route exact path="/Craft-Supplies" component={ProductIndexContainer} />
       <Route exact path="/Gifts-Gift-Cards" component={ProductIndexContainer} />
       <Route exact path="/products/:productId" component={ProductShowContainer} />
       <Route exact path="/" component={ProductIndexContainer } />
       <Redirect to="/" />
      </Switch>
    </div>
    {/* <AuthRoute exact path="/signup" component={SignupContainer} />
    <AuthRoute exact path="/login" component={LoginContainer} /> */}

  </div>
);


export default App