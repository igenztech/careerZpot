import axios from "axios"
export const ActionTypes = {
  REQUEST_API_DATA : "REQUEST_API_DATA",
  RECEIVE_API_DATA : "RECEIVE_API_DATA"
}

export const requestApiData = (file) => ({type : ActionTypes.REQUEST_API_DATA, payload: file})
export const receiveApiData = (data) => ({type : ActionTypes.RECEIVE_API_DATA, data})
// ** ADD PERSONAL_DETAILS
const initialState = {
  data : {}
}
export const addpersonal = (payload) => {
  return {
    type: "ADD_PERSONAL_DETAILS",
    payload
  }
}

export const addeducation = (payload) => {
  return {
    type: "ADD_EDUCATIONAL_DETAILS",
    payload
  }
}

export const addprofession = (payload) => {
  return {
    type: "ADD_PROFESSIONAL_DETAILS",
    payload
  }
}

export const addskill = (payload) => {
  return {
    type: "ADD_SKILL_DETAILS",
    payload
  }
}
