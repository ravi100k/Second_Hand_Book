import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import {fetchList,searchText} from '../actions'
import { connect,dispatch } from 'react-redux';

class Order extends React.Component{


  render(){
    console.log(this.props);
    return(
      <div>
      <Header/>

      </div>
      );
    }
}


const mapStateToProps = (data) =>{
  return {data}
}

const mapDispatchToProps = (dispatch) => ({
  // fetchList: (text) => dispatch(fetchList(text)),
  // searchText: (text) => dispatch(searchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
