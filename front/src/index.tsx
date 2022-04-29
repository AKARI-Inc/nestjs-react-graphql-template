import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const client = new ApolloClient({
  link: createHttpLink({
    uri: `${process.env.REACT_APP_BACKEND_HOST}/graphql`,
  }),
  cache: new InMemoryCache(),
})
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
