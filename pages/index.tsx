import React from "react";

import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { Users } from "../components/Users";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://nearby-raven-17.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret":
        "TR0giZ4h0GxsZMVoJeA90YVkDSkS0nLVSVTI8Rczknoe7zPk3xx1E0wP2sl42PgA",
    },
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <h2 className="text-center my-3 font-bold text-red-700 text-xl">My First Apollo App</h2>
    <Users />
  </ApolloProvider>
);
export default App;