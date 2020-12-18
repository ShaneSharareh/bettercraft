import {connect} from 'react-redux'
import ProductIndex from './product_index'
import {fetchProducts} from '../../actions/product_actions'

const mapStateToProps = (state,ownProps) => ({
    products: Object.values(state.entities.products),
    category: ownProps.match.path.slice(1),
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)