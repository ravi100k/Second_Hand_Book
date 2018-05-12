import React from 'react';
import Header from './Header';
import RaisedButton from 'material-ui/RaisedButton';
// import {fetchList,searchText} from '../actions'
import {connect,dispatch } from 'react-redux';

const styles = {
  buyButton:{
    marginLeft:'20px',
    marginRight: '20px',
    width:'200px',
  },
  addCart:{
    marginLeft:'20px',
    width:'200px',
  }
};

class BuyBook extends React.Component{

  constructor(props){
		super(props);
    }

  buyBook = (event) =>{
    console.log('buyBook');
    // this.props.history.push('/Order',this.props.location.state)
  }

  render(){

    return(
    <div>
    <Header/>
      <div style={{position:'relative',marginTop:'10px',marginLeft:'10px',width:'500px',border:'1px solid #000000',height:'400px',}}>
          <p>Book Name ::: -- {this.props.location.state.title}</p>
          <p>Subtitle ::: -- {this.props.location.state.subtitle}</p>
          <p>Author Name ::: -- {this.props.location.state.author}</p>
          <p>Website ::: -- {this.props.location.state.website}</p>
          <p>Description ::: -- {this.props.location.state.description}</p>
          <RaisedButton secondary={true} style={styles.buyButton} onClick={this.buyBook} label="Buy Now"/>
          <RaisedButton primary={true} style={styles.addCart} onClick={this.addCart} label="Add to cart"/>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BuyBook);
