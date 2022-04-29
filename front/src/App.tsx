import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useAppQuery } from './generated/graphql'

function App(): JSX.Element {
  const { data } = useAppQuery()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{data?.users.map((user) => `${user.familyName} ${user.givenName}`).join(', ')}</p>
      </header>
    </div>
  )
}

export default App
