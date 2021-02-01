import React from 'react'
import {Link} from 'react-router-dom'
import ReviewIndexItemContainer from '../Review/review_index_item_container';
import CreateReviewFormContainer from '../Review/create_review_form_container'
import 'regenerator-runtime/runtime'


class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            product_id: this.props.productId,
            price: ""
        }
        this.handleAddCart = this.handleAddCart.bind(this)
    }
    componentDidMount(){
        this.props.fetchProduct(this.props.productId);
        this.props.fetchReviews(this.props.productId);
    }
     async handleAddCart(e){
        e.preventDefault();
        await this.setState({
                price: this.props.product.price
            })
        await this.props.createCartedItem(this.state)
        location.href='#/cart'

    }
    render() {
        const {product, reviews} = this.props;
        
        return(
            
            product ?
            <div className="product-show">
                {console.log("pug " + this.state.price)}
                <div className ="product-show-content">
                    <div className="product-show-image-container">
                        <img src={`${product.image_name}`} alt=""/>
                    </div>
                    <div className ="product-show-info-container">
                        <p className = "product-show-store">{product.store_name}</p>
                        <p className = "product-show-description">{product.description}</p>
                        <p className = "product-show-price">{product.price}</p>
                        {/* <Link to="/">Home</Link> */}
                      <form onSubmit={this.handleAddCart}>
                            <input className = "add-cart-btn" type="submit" value="Add to Cart"/>
                          </form>
                    </div>
                </div>
                    <div className ="product-show-review-container">
                        <h3 className="reviews-header">{reviews.length} Reviews</h3>
                        <div className = "product-show-reviews-list"></div>
                            {
                            reviews.map(review =>{
                                    return <ReviewIndexItemContainer currentUserSession={this.props.currentUserSession} review={review} productId={product.id}  key={review.id}/>
                                
                            }
                                )

                                }
                        <div className ="product-show-create-reviews">
                            <CreateReviewFormContainer productId={product.id} />
                        </div>
                    </div>

            </div>
            :
            <div></div>
        )
    }
}

export default ProductShow