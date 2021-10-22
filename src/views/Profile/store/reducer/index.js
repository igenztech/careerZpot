export const REQUEST_API_DATA = "REQUEST_API_DATA"
export const RECEIVE_API_DATA = "RECEIVE_API_DATA"

export const requestApiData = () => ({type : REQUEST_API_DATA})
export const receiveApiData = (data) => ({type : RECEIVE_API_DATA, data})
const initialState = {
  data: {},
  personalDetails: {},
  educationalDetails: [],
  professionalDetails: [],
  skillDetails: []
}
const candidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_API_DATA':
      const { data } = action
      return { ...state, data }
    case "ADD_PERSONAL_DETAILS":
      return { ...state, personalDetails: action.payload }
    case "ADD_EDUCATIONAL_DETAILS":
      return { ...state, educationalDetails: action.payload }
    case "ADD_PROFESSIONAL_DETAILS":
      return { ...state, professionalDetails: action.payload }
    case "ADD_SKILL_DETAILS":
      return { ...state, skillDetails: action.payload }
    default:
      return state
  }
}

export default candidateReducer
