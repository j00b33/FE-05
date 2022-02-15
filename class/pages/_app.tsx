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
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalstlyes";
import { createUploadLink } from "apollo-upload-client";
import { initializeApp } from "firebase/app";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCQbouh-zQ-3Lu0gC0c5sjfR-UbexdrZNE",
  authDomain: "jbsite-77c6d.firebaseapp.com",
  projectId: "jbsite-77c6d",
  storageBucket: "jbsite-77c6d.appspot.com",
  messagingSenderId: "1016132627942",
  appId: "1:1016132627942:web:4f02aa495f12c65e0afa27",
};
export const firebaseApp = initializeApp(firebaseConfig);

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
}
export const GlobalContext = createContext<IGlobalContext>({});
function MyAPP({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const value = {
    accessToken,
    setAccessToken,
  };

  // if (process.browser){
  //   if (localStorage.getItem("accessToken")) {
  //     setAccessToken(localStorage.getItem("accessToken") || "");
  //   }
  // }

  // if (typeof window !== "undefined"){
  //   //--> window가 browser라는 것
  //   if (localStorage.getItem("accessToken")) {
  //     setAccessToken(localStorage.getItem("accessToken") || "");
  //   }
  //   //여기 위에 두개로 하면 setState가 계속 바뀌어서 안됨
  // }

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken") || "");
    }
    //useEffect는 한번만 실행이 되기 때문에 여기서 setState하고 종료
  });

  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql", //apollo setting
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    //link: 다른 기능들을 연결해주겠다
    //알 수 없는 타입의 아폴로링크꺼

    cache: new InMemoryCache(),
    //"링크"에서 받아온 데이터들을 따로 저장공간을 만들어서 저장을 해둠
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyAPP;

//어떤 페이지를 실행하던 이게 먼저 접속되고 그 다음 세팅된 페이지가 먹히는것
