import { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "./Components/GetUsers";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    
    graphQLErrors.map(({ message, locations, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const apiUrl = 'https://localhost:7258/graphql';

// const link = from([
//   errorLink,
//   new HttpLink({ uri: apiUrl})
// ]);

// const client = new ApolloClient({
//   link: new HttpLink({ uri: 'https://developer.github.com/v4/explorer/' }),
//   fetchOptions: {
//       mode: 'no-cors',
//     },
//   cache: new InMemoryCache()
// });

// const client = new ApolloClient({
//   networkInterface: createNetworkInterface({
//     uri: 'https://localhost:7258/graphql', //<<<<< There is a different endpoint then the standard 'graphql' which is why this is declared
//   })
// });

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: link,
// });

const client = new ApolloClient({
  link: new HttpLink({ uri: apiUrl }),
  cache: new InMemoryCache(),
});

const App = () => {
  return(
    <div className="container">
    <ApolloProvider client={client}>
        {" "}
        <GetUsers />
    </ApolloProvider>
          </div>
  )
}

export default App;
