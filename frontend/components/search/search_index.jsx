import React from 'react';
import ProductIndexItem from '../products/product_index_item';
class SearchIndex extends React.Component {
    constructor(props) {
    super(props);

  }

    componentDidMount() {
        this.props.fetchProducts();

    }

 

    render() {
        console.log(this.props.searchedWord)
        let searchedWord = this.props.searchedWord
        const {products} = this.props;
        let notFoundCount = 0;
        return(
           <div>
            <div className="product-list">
                {
                     products.map((product,index) => {
                       if ((searchedWord === "" || searchedWord == null ) ){   
                            return  <ProductIndexItem key={product.id} product={product}/>
                       }else if(product.name.toUpperCase().includes(searchedWord.toUpperCase()) || product.store_name.toUpperCase().includes(searchedWord.toUpperCase())){
                               return  <ProductIndexItem key={product.id} product={product}/>
                       }
                       else{
                           notFoundCount++
                       }

                        }
                     
                     
                   )

                  
                }
              
                
            </div>
              {products.length === notFoundCount ?
              <div className="no-results-container">
                        <h1>We couldn't find any results for {searchedWord}...</h1>
             </div>:
             <p></p>
            }
             </div>
        )
    }
}
export default SearchIndex