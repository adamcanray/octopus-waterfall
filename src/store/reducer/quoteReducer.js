const initState = {
  quotes: [ ]
}

const quoteReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_QUOTE':
      console.log('created quote', action.quote);
      return state;
    case 'CREATE_QUOTE_ERROR':
      console.log('create quote error', action.err);
      return state;
    default:
      return state;
  }
}

export default quoteReducer