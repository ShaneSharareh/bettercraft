import React from 'react';
import { Route , withRouter} from 'react-router-dom';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
    }

   

    handleSubmit(e){
        e.preventDefault();
        this.props.history.push(`/search/${this.state.search}`);
    }

      updateSearch(e) {
        
        this.setState({
        search: e.currentTarget.value,
      });
  }

    render(){
        return ( 
            <div className="search-container">
          <form  onSubmit={this.handleSubmit} className = "search-form">
            <input onChange={this.updateSearch} value={this.state.search} className="search-holder" type="text" placeholder="Search for anything" name="search"/>
          </form>
      </div>
        )
    }
}

export default withRouter(Search)