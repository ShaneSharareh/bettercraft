import React from 'react';

class OrderSummary extends React.Component {
    constructor(props) {
        super(props);
        this.getCurrDate = this.getCurrDate.bind(this)
    }
    componentDidMount(){
      this.props.fetchCurrentUser(this.props.currentUser.id)
    }


    getCurrDate(){
        const currDate = new Date();
        const month = currDate.getUTCMonth() + 1; //months from 1-12
        const day = currDate.getUTCDate();
        const year = currDate.getUTCFullYear();

        return month + "/" + day + "/" + year;
    }

    render() {
        const shipping = 5.00;
        const tax = 7.00;

        return(
            
            true ?
                
                <div className ="order-summary-container">
                    <div className ="order-summary-header">
                        <h1 className="summary-header-color">Thank you for your order, {this.props.currentUser.username}</h1>
                    </div>
                        <div className ="order-summary-description">
                            <div className="order-summary-info-labels">
                              <p>Tracking Number:</p>
                              <p>Order Date:</p>
                            </div>
                            <div className="order-summary-info-values">
                                <p>{ Math.random().toString(36).substr(2, 9)}</p>
                                <p>{this.getCurrDate()}</p>
                            </div>
                            <div>
                                <button className = "print-btn" onClick={window.print}> <i className="fa fa-print"></i> Print </button>
                            </div>
                        </div>
                        <div className="order-summary-instructions">
                            <p> Please keep the information above for your reference. We also sent a confirmation of the following to
                                your email, {this.props.currentUser.email}. Contact the store for further shipment instructions
                            </p>
                        </div>
                        <div className ="order-summary-price">
                            <h1 className="summary-header-color">Order Summary</h1>
                        
                                <div className="summary-totals">
                                <p>Subtotal:</p>
                                <p>{this.props.subtotal}</p>
                                </div>

                                <div className="summary-totals">
                                <p>Shipping:</p>
                                <p>${shipping}</p>
                                </div >
                                <div className="summary-totals">
                                <p>Estimated Tax:</p>
                                 <p>${tax}</p>

                                </div>
                                <div className="summary-totals">
                                <p>Order Total</p>
                                 <p>${(this.props.subtotal + shipping + tax)}</p>

                                </div>
                              </div>
                            

                        </div>
                        
                
                   
            :
            <div></div>
        )
    }
}

export default OrderSummary