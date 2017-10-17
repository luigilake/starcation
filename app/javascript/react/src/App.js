import React from 'react';

const App = props => {
  return(
    <div>
    <h1>Hello World</h1>
    <a href="/users/sign_in">sign in</a>
    <div>
    <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/users/sign_out">sign out</a>
    </div>
    </div>
  )
}

export default App
