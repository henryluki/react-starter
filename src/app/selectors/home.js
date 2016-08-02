import { createSelector } from 'reselect'

const getHomeData = state => state.home.data
const getHomeLoaded = state => state.home.loaded

export default createSelector(
    getHomeData,
    getHomeLoaded,

    (data, loaded) => {
        return {
            data,
            loaded
        }
    }
)