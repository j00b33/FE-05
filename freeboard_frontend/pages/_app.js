import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

function MyAPP({Component, pageProps}){

    const client = new ApolloClient({
        uri: "http://backend05.codebootcamp.co.kr/graphql", 
        cache: new InMemoryCache()
    })

    return ( 
        <ApolloProvider client={client}>
            <Glibal styke={globalStyles}/>
            <Layout>
            <Component {...pageProps}/>
            </Layout>
        </ApolloProvider>
    )
}

export default MyAPP