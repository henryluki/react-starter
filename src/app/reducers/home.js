import * as types from '../constants/actionTypes'

const initialState = {
    data: { entries: []}
}

export default function home(state = initialState, action){
    switch (action.type){
        case types.FETCH_DATA:
            return Object.assign({}, state, { data: action.data, loaded: true })

        default:
            return state
    }
}