import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar'
import IndexPage from './components/IndexPage'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={IndexPage}/>

      </Route>
    </Router>
  )
}

export default App

// <div>
// <h1>Hello World</h1>
// <a href="/users/sign_in">sign in</a>
// <div>
// <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/users/sign_out">sign out</a>
// </div>
// </div>
