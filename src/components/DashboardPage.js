import React from 'react';
import Header from './Header';
import {getList} from '../actions';
import { connect,dispatch } from 'react-redux';

class DashboardPage extends React.Component{

handleBuyBook = (data) => (event) =>{
  this.props.history.push(`/buybooks`,data);
}

handleSellBook = (data) => (event) =>{
  this.props.history.push(`/sellbooks`,data);
}

render(){
  const display = this.props.value==undefined ?
                  null : this.props.value.map((data,i)=>{
                         return (
                           <div className="demo-card-square mdl-card mdl-shadow--2dp" key={i}>
                 							<div className="mdl-card__title mdl-card--expand">
                 								<h2 className="mdl-card__title-text">{data['title']}</h2>
                 							</div>
                 							<div className="mdl-card__supporting-text">
                 								Book Information
                 							</div>
                 							<div className="mdl-card__actions mdl-card--border">
                 								<button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.handleBuyBook(data)}>
                 									Buy Book
                 								</button>
                                <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.handleSellBook(data)}>
                 									Sell Book
                 								</button>
                 							</div>
                 						</div>
                          )
                        });

  return (
    <div>
      <Header/>
      <div className='card_instance'>
          {display}
      </div>
    </div>
  )}
}

const mapStateToProps = (data) =>{
  var value = data.data.data
  if (data.text.text!=null){
        value = value.filter((text) =>{
      return text['title'].toLowerCase().indexOf(data.text.text.toLowerCase()) >= 0
    });
  }
  // console.log(value,'saerch result');
  return {value}
}

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(getList())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
