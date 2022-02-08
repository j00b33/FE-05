// import ' ../styles/globals.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import Layout from "../src/commons/layout/index";
import { globalStyles } from "../src/commons/styles/globalstyles";
import { createUploadLink } from "apollo-upload-client";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCQbouh-zQ-3Lu0gC0c5sjfR-UbexdrZNE",
  authDomain: "jbsite-77c6d.firebaseapp.com",
  projectId: "jbsite-77c6d",
  storageBucket: "jbsite-77c6d.appspot.com",
  messagingSenderId: "1016132627942",
  appId: "1:1016132627942:web:4f02aa495f12c65e0afa27",
};
export const firebaseApp = initializeApp(firebaseConfig);

function MyAPP({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    //linke: 다른 기능들을 연결해주겠다
    //알 수 없는 타입의 아폴로링크꺼

    cache: new InMemoryCache(),
    //"링크"에서 받아온 데이터들을 따로 저장공간을 만들어서 저장을 해둠
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyAPP;
