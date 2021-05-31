export function fetchQuotes() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_QUOTES_REQUEST' });
      fetch('/quotes')
        .then(response => response.json())
        .then(quotes => dispatch({ type: 'ADD_QUOTES', quotes }));
    };
  }