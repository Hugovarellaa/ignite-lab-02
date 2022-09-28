import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL, //variavel ambiente no ponto env
  headers: {
    "Authorization": `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN_GRAPHCSM}` //variavel ambiente no ponto env
  },
  cache: new InMemoryCache()
})