import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl8k5zcou1dpa01ul5w995inc/master",
  cache: new InMemoryCache()
})