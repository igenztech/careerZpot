import { call, put } from "@redux-saga/core/effects"
import { receiveApiData, ActionTypes } from "../../views/Profile/store/action"
import { requestGetUser } from "../requests/requests"

export function* handleGetUser(action) {
    try {
        const file = action.payload
        console.log('aaaaaaa', file)
        const response = yield call(requestGetUser, file)
        const { data } = response
        yield put(receiveApiData(data))
    } catch (error) {
        console.log(error)
    }

}