import React from 'react'
import {Link} from 'react-router-dom'
import ReviewIndexItem from '../Review/review_index_item';
import CreateReviewFormContainer from '../Review/create_review_form_container'


class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            product_id: this.props.productId,
        }
        this.handleAddCart = this.handleAddCart.bind(this)
    }
    componentDidMount(){
        this.props.fetchProduct(this.props.productId);
        this.props.fetchReviews(this.props.productId);
    }
    handleAddCart(e){
        e.preventDefault();
        this.props.createCartedItem(this.state)
    }
    render() {
        const {product, reviews} = this.props;
        
        return(
            product ?
            <div className="product-show">
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
                                    return <ReviewIndexItem review={review} productId={product.id}  key={review.id}/>
                                
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