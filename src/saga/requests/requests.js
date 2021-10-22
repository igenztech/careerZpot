import axios from "axios"
export function requestGetUser(file) {
    return axios.request({
        method: 'POST',
        url: "http://localhost:8000/resume/file",
        body: file
    })
}