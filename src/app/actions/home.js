import * as types from '../constants/actionTypes'
import { GET } from 'utils/request'

export function fetchHomeData(data){
    return (dispatch, getState)=> {
        const state = getState()

        // use state cache instead
        if (state.home.loaded) {
            return new Promise(resolve => resolve(true))
        }

        return GET("/api/users").then(res => {
            dispatch({
                type: types.FETCH_DATA,
                data: res.data
            })
        })
    }
}