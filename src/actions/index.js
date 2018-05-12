import axios from 'axios';
import {dispatch} from 'react-redux';

export const searchText = (value) => {
return {
  type: 'SEARCH_TEXT',
  value: value
	}
};

export const fetchList = (text) => {
	return (dispatch) => {
		axios.post('/booklist/search',{text:text})
    .then((res) => {
          dispatch({
					type:'FETCH_LIST',
					payload:res.data
				})
      })
    .catch(err => console.log(err))
   }
}
