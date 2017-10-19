import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar'
import IndexPage from './containers/IndexPage'
import ShowPage from './containers/ShowPage'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={IndexPage}/>
        <Route path="/celestials" component={IndexPage}/>
        <Route path="/celestials/:id" component={ShowPage}/>
      </Route>
    </Router>
  )
}

export default App
