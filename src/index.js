import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';

import './css/index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

function Main() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}

render(<Main />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
