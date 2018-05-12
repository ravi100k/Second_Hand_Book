export default (state = {text:null}, action) => {
  switch (action.type) {
    case 'SEARCH_TEXT':{
        return {
          text : action.value
          }
        }
        default:
          return state;
      }
  };
