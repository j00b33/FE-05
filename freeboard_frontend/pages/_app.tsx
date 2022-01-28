// import ' ../styles/globals.css'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import {AppProps} from 'next/app'
import 'antd/dist/antd.css'
import {Global} from '@emotion/react'
import Layout from '../src/commons/layout/index'
import {globalStyles} from '../src/commons/styles/globalstyles'

function MyAPP({Component, pageProps}: AppProps){

    const client = new ApolloClient({
        uri: "http://backend05.codebootcamp.co.kr/graphql", 
        cache: new InMemoryCache()
        //"링크"에서 받아온 데이터들을 따로 저장공간을 만들어서 저장을 해둠
        
    })

  return ( 
    <ApolloProvider client={client}>
        <Global styles={globalStyles}/>
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    </ApolloProvider>
    )
}

export default MyAPP
