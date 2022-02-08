import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import { Signup } from "./signup.postgres";

const typeDefs = gql`
  type Signup {
    number: Int
    name: String
    id: String
    password: String
    age: Int
  }

  input CreateSignupInput {
    name: String!
    id: String!
    age: Int!
  }

  type Query {
    fetchSignup: [Signup]
  }

  type Mutation {
    createSignup(createSignupInput: CreateSignupInput): String
    deleteSignup(number: Int!): String
  }
`;

const resolvers = {
  Query: {
    fetchSignup: async () => {
      //DB와 연결 (꺼내서 오기)
      const result = await Signup.find({
        //find : 이름 철수 인 애 다 가져오셈 10개면 10개 다 가져와
        //다 찾아올 수도 있고--()--사용 // 조건을 걸 수도 있음 : where 사용
        where: { deletedAt: null },
        //이름이 철수이며 deletedAt 상태가 null 인것들을
      });
      console.log(result);
      return result;
      //string이랑 result랑 다름. 얜 이제부터 Board type이 되어야함
    },
  },

  Mutation: {
    createSignup: async (_: any, args: any) => {
      await Signup.insert({
        //   ...args.createBoardInput  (--> 이거 쓰거나 아래 3줄 쓰거나)
        //spread연산자 사용하면 더 축약할 수 있음
        name: args.createSignupInput.name,
        id: args.createSignupInput.id,
        password: args.createSignupInput.password,
        age: args.createSignupInput.age,
      });
      return "createBoard를 요청하셨습니다";
    },

    deleteProfile: async (_: any, args: any) => {
      //이러면 args에 사제요청한 ID가 들어오게 됨
      args.profileId;
      await Signup.update({ number: args.number }, { deletedAt: new Date() });
      //{조건}, {바꿀 내용}

      // Board.delete({writer: "철수", isDeleted: false})
      //writer가 철수 인 애들 전부 다 지워버리는것
      //isDeleted 로 삭제된거처럼 보여서 조회만 안될뿐 데이터는 있음 (실제로 막 지우진 않음)
      //이런 삭제를 soft delete라고 함

      return "삭제가 완료되었습니다";
      // --> soft delete
    },
  },
};

//server는 그냥 이름이여서 aaa로 const 해줘도 상관없음
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

console.log("hello typescript");

//데이터베이스에 연결해주는 코드를 써줘야함
createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5021, //내 개인 포트번호
  host: "34.64.187.209",
  entities: ["./*.postgres.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    //연결 성공시 실행
    console.log("접속완료");

    server.listen({ port: "3000" });
    // 서버 접속 완료 하면 --> 4000 번 포트로 24시간 기다리는것 (listen)의 기능
    // 그럼 4000번을 기준으로 다양한 API가 존재하는데 그 중 fetchBoards랑 createBoard를 만든것
  })
  .catch((error) => {
    //연결 실패시 실행
    console.log(error);
  });
