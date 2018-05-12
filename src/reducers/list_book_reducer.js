export default (state = {data:null}, action) => {
  switch (action.type) {
    case 'FETCH_LIST':{
        return {
          data : action.payload
          }
        }
        default:
          return state;
      }
  };
