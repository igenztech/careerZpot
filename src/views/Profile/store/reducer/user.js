export const REQUEST_API_DATA = "REQUEST_API_DATA"
export const RECEIVE_API_DATA = "RECEIVE_API_DATA"

export const requestApiData = (values) => ({type : REQUEST_API_DATA, payload})
export const receiveApiData = (data) => ({type : RECEIVE_API_DATA, data})
const initialState = {
  data: {}
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_API_DATA':
      const { data } = action
      return { ...state, data }
    default:
      return state
  }
}

export default userReducer
