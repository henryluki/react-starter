import { render } from 'react-dom'
import { Router, Route, useRouterHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'app/store/configureStore'
import { createHashHistory } from 'history'

import Home from './Home'
import About from './About'

const routes = (history) => (
    <Router history={history}>
        <Route path="/" component={Home} />
        <Route path="about" component={About} />
        <Route path="*" component={Home} />
    </Router>
)
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const store = configureStore(appHistory)
const history = syncHistoryWithStore(appHistory, store)

render(
    <Provider store={store}>
    { routes(history) }
    </Provider>, document.getElementById('container')
)