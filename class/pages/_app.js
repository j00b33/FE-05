// import ' ../styles/globals.css'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

function MyAPP({Component, pageProps}){

    const client = new ApolloClient({
        uri: "http://example.codebootcamp.co.kr/graphql", 
        cache: new InMemoryCache()
        //"링크"에서 받아온 데이터들을 따로 저장공간을 만들어서 저장을 해둠
    })

    return ( 
        <ApolloProvider client={client}>
            <Component {...pageProps}/>
        </ApolloProvider>
    )
}

export default MyAPP


//어떤 페이지를 실행하던 이게 먼저 접속되고 그 다음 세팅된 페이지가 먹히는것