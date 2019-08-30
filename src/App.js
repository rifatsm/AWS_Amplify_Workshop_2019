import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from 'aws-amplify-react'
import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'

function App() {
 useEffect(() => {
   Auth.currentAuthenticatedUser()
     .then(user => console.log({ user }))
     .catch(error => console.log({ error }))
 })
 return (
   <div className="App">
     <p>
       Hello! This is an AWS Amplify application.
     </p>
   </div>
 )
}

export default withAuthenticator(App, { includeGreetings: true })

/*
// Previous code
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
