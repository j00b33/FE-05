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
import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
import { onError } from "@apollo/client/link/error";

const firebaseConfig = {
  apiKey: "AIzaSyCQbouh-zQ-3Lu0gC0c5sjfR-UbexdrZNE",
  authDomain: "jbsite-77c6d.firebaseapp.com",
  projectId: "jbsite-77c6d",
  storageBucket: "jbsite-77c6d.appspot.com",
  messagingSenderId: "1016132627942",
  appId: "1:1016132627942:web:4f02aa495f12c65e0afa27",
};
export const firebaseApp = initializeApp(firebaseConfig);

interface IUserInfo {
  name?: string;
  email?: string;
  picture?: string;
}

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: IUserInfo;
  setUserInfo?: Dispatch<SetStateAction<IUserInfo>>;
}
export const GlobalContext = createContext<IGlobalContext>({});
function MyAPP({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState<IUserInfo>({});
  const value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
  };

  // if (localStorage.getItem("accessToken")){
  //   setAccessToken(localStorage.getItem("accessToken") || "")
  // }

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken") || "");
    }

    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    // });
  }, []);

  // const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  //   // 1. 에러를 캐치
  //   if (graphQLErrors) {
  //     for (const err of graphQLErrors) {
  //       // 2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
  //       if (err.extensions.code === "UNAUTHENTICATED") {
  //         // 3. refreshToken으로 accessToken을 재발급 받기
  //         getAccessToken().then((newAccessToken) => {
  //           // 4. 재발급 받은 accessToken 저장하기
  //           setAccessToken(newAccessToken);

  //           // 5. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
  //           operation.setContext({
  //             headers: {
  //               ...operation.getContext().headers,
  //               Authorization: `Bearer ${newAccessToken}`,
  //             },
  //           }); // 설정 변경(accessToken만!! 바꿔치기)
  //           return forward(operation); // 변경된 operation 재요청하기!!
  //         });
  //       }
  //     }
  //   }
  // });

  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    // credentials: "include", //-->중요한 쿠키 저장
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    //linke: 다른 기능들을 연결해주겠다
    //알 수 없는 타입의 아폴로링크꺼

    cache: new InMemoryCache(),
    //"링크"에서 받아온 데이터들을 따로 저장공간을 만들어서 저장을 해둠

    connectToDevTools: true,
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
