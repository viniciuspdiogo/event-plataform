import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7n7ks14bl01z2ea64cabp/master',
    cache: new InMemoryCache(),
})