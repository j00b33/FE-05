import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken() {
  try {
    //3. refreshToken으로 accessToken을 재발급 받기
    const graphqlClient = new GraphQLClient(
      "https://backend05.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphqlClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
}
