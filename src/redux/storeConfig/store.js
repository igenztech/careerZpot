// ** Redux, Thunk & Root Reducer Imports
import thunk from "redux-thunk"
import createDebounce from "redux-debounced"
import rootReducer from "../reducers/rootReducer"
import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import mySaga from "../../saga/saga"
import createSagaMiddleware from "@redux-saga/core"
//import candidateReducer from "../../views/Profile/store/reducer/index"

// const reducer = combineReducers({
//   user: rootReducer
// })
// ** init middleware
const Sagamiddleware = createSagaMiddleware()

const middleware = [Sagamiddleware, thunk, createDebounce()]

// ** Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// ** Create store
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
)
Sagamiddleware.run(mySaga)

export { store }
