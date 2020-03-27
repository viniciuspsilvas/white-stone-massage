import { ApolloClient, ApolloLink, InMemoryCache } from 'apollo-boost'
import { onError } from 'apollo-link-error'
import { createUploadLink } from 'apollo-upload-client'
import { AlertError } from '../components/Alert'

const httpLink = new createUploadLink({ uri: process.env.REACT_APP_SERVER_URL });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem('token');

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const errorLink = ApolloLink.from([
  onError(({ graphQLErrors, networkError, operation, forward }) => {

    if (graphQLErrors) {
      graphQLErrors.map(({ message }) => AlertError(message))
    }

    if (networkError) {
      switch (networkError.statusCode) {
        case 400:
        // TODO
        break;

        case 500:
        // TODO
        break;

        default:
          break;
      }

      AlertError(networkError.message)
    }
  })
])

const client = new ApolloClient({
  link: authLink.concat(errorLink).concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false
  })
});

export default client