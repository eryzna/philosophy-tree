export function fetchCategories() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_CATEGORIES_REQUEST' });
      fetch('/categories')
        .then(response => response.json())
        .then(categories => dispatch({ type: 'ADD_CATEGORIES', categories }));
    };
  }