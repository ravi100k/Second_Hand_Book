import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import {fetchList,searchText} from '../actions'
import { connect,dispatch } from 'react-redux';

class Header extends React.Component{

  componentWillMount(){
      this.props.fetchList('')
  }

  onSearch = (event) =>{
    this.props.searchText(event.currentTarget.value)
  }


  render(){
    return(
      <div className="demo-layout-transparent mdl-layout mdl-js-layout">
        <header className="mdl-layout__header mdl-layout__header--transparent" >
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Title</span>

            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
            </nav>
          </div>
        </header>
            <div className="mdl-layout__drawer">
              <span className="mdl-layout-title">Title</span>
              <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
              </nav>
            </div>
      </div>
      );
    }
}

const mapDispatchToProps = (dispatch) => ({
  fetchList: (text) => dispatch(fetchList(text)),
  searchText: (text) => dispatch(searchText(text)),
});

export default connect(undefined, mapDispatchToProps)(Header);

//
// <div className="content-container">
//   <div className="header__content">
//     <Link className="header__title" to="/">
//       <h1>Old Book Center</h1>
//     </Link>
// <form className="navbar-form navbar-left" role="search" onSubmit={this.onSearch}>
//   <div className="form-group">
//     <input type="text" className="form-control" placeholder="Search" onChange={this.onSearch}/>
//   </div>
// </form>
//   </div>
// </div>
