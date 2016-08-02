import 'whatwg-fetch'
import objectAssign from 'object-assign'

let getExtra = (method, headers, body)=> (
    objectAssign({}, method || {}, headers || {}, body || {})
)

let checkStatus = (res) => {
    let status = res.status
    if (status != 200) {
        throw new Error("Server return status: ", status)
    } else {
        return res
    }
}

let parseJson = (res) => (
    res.json()
)

export function GET(url, data={}, options={}){
    return fetch(url, getExtra({ method: 'get' }))
        .then(checkStatus)
        .then(parseJson)
}

export function POST(url, data={}, options={}){
    return fetch(url, getExtra({ method: 'post' }, { headers: options }, { data: data }))
        .then(checkStatus)
        .then(parseJson)
}

