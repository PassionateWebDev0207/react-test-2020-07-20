const initialState = {
  data: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_DATA':
      return {...state, data: action.data};
    default:
      return state;
  }
}

export default reducer;
