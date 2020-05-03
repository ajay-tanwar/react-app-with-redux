const isState = {
  name: "Rock",
  wishes: ["code", "game"]
}

const reducer = (state=isState, action) => {
  if(action.type === 'CHANGE_NAME'){
    return {
      ...state,
      name: action.payload
    }
  }

  if(action.type === 'ADD_NAME'){
    return {
      ...state,
      name: action.payload
    }
  }
  return state;
}

export default reducer;