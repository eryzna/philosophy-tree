function Reducer(state = { categories: [], quotes: [], requesting: false }, action) {
  switch (action.type) {
 
    case 'START_ADDING_CATEGORIES_REQUEST':
      return {
        ...state,
        categories: [...state.categories],
        requesting: true
      }
 
    case 'ADD_CATEGORIES':
      return {
        ...state,
        categories: action.categories,
        requesting: false
      }
    
    case 'START_ADDING_QUOTES_REQUEST':
      return {
        ...state,
        quotes: [...state.quotes],
        requesting: true
      }
 
    case 'ADD_QUOTES':
      return {
        ...state,
        quotes: action.quotes,
        requesting: false
      }
 
    default:
      return state;
  }
};

export default Reducer