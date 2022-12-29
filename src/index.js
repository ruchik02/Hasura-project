import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import Users from './components/Users';

const client = new ApolloClient({
  uri: 'https://nearby-raven-17.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers:{
    'x-hasura-admin-secret':"TR0giZ4h0GxsZMVoJeA90YVkDSkS0nLVSVTI8Rczknoe7zPk3xx1E0wP2sl42PgA",
  },
});

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client} >
    <App />
    <Users/>
  </ApolloProvider>,
);
