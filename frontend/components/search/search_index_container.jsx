import {connect} from 'react-redux'
import SearchIndex from './search_index'
import {fetchProducts} from '../../actions/product_actions'

const mapStateToProps = (state,ownProps) => ({
    products: Object.values(state.entities.products),
    searchTerm: ownProps.match.params.searchTerm
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex)