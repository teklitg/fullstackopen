// Action Type
const SET_FILTER = 'SET_FILTER'

// Reducer
const filterReducer = (state = '', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.data
    default:
      return state
  }
}

// Action Creator
export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    data: filter
  }
}

export default filterReducer
