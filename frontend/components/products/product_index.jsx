import React from 'react';
import ProductIndexItem from './product_index_item';
class ProductIndex extends React.Component {
    constructor(props) {
    super(props);

  }

    componentDidMount() {
        this.props.fetchProducts();

    }

    render() {
        let category = this.props.category
        const {products} = this.props;
        return(
            <div className="product-list">
                {
                     products.map((product,index) => {
                       if ((category === "" || category === null)  ){   
                            return  <ProductIndexItem key={product.id} product={product}/>
                       }else{
                           if(category === product.category){
                               return  <ProductIndexItem key={product.id} product={product}/>
                           }

                        }
                        }
                     
                     )
                }
            </div>
        )
    }
}
export default ProductIndex