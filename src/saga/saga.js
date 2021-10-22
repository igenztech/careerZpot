import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects"
import { receiveApiData, ActionTypes } from "../views/Profile/store/action"
import axios from "axios"

export function requestGetUser(file) {
    const formdata = new FormData()
        formdata.append("file", file)
    return axios.request({
        method: 'POST',
        url: "http://localhost:8000/resume/file",
        data: formdata
    })
}
export function* handleGetUser(file) {
    try {
        console.log(file)
        const response = yield call(requestGetUser, file)
        console.log(response)
        alert(JSON.stringify(response))
        const { data } = response
        yield put(receiveApiData(data))
    } catch (error) {
        console.log(error)
    }

}
export default function* mySaga() {
    yield takeLatest(ActionTypes.REQUEST_API_DATA, function* (action) {
        const file = action.payload
        console.log(file)
        yield call(handleGetUser, file)
    })
}
