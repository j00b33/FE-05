import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
//graphql 설치해줘야함
import { Board } from "./Board.postgres";

const typeDefs = gql`
  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }

  input CreateBoardInput {
    writer: String!
    title: String!
    age: Int!
    # type은 return으로 받는 부분만 가능함 그래서 input 이라고 바꿔줘야함
    # type 과 input type의 차이점
  }

  type Query {
    fetchBoards: [Board]
  }

  type Mutation {
    createBoard(createBoardInput: CreateBoardInput): String
    deleteBoard(number: Int!): String
    # //ID는 number type, 리턴 메시지는 string

    # string이란 리턴이 나옴
    # String! => ! 반드시 있어야한다 (느낌푱)
    # 느낌표가 있으면 있을수록 안전해지지만 제약이 많이 걸리느거임
  }
`;

const resolvers = {
  Query: {
    fetchBoards: async () => {
      //DB와 연결 (꺼내서 오기)
      const result = await Board.find({
        //find : 이름 철수 인 애 다 가져오셈 10개면 10개 다 가져와
        //다 찾아올 수도 있고--()--사용 // 조건을 걸 수도 있음 : where 사용
        where: { writer: "철수", deletedAt: null },
        //이름이 철수이며 deletedAt 상태가 null 인것들을
      });
      console.log(result);
      return result;
      //string이랑 result랑 다름. 얜 이제부터 Board type이 되어야함
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      //args: 실제 인자 (인자를 받아와서 넘겨줘야하기때문에 사용)
      //parent는 아직 안쓰기때문에 _처리
      //DB와 연결 (저장하고 저장한 결과를 리턴)

      //   await Board.insert({
      //     writer: "철수",
      //     title: "제목입니다",
      //     age: 12,
      //   });
      //-->이랬던걸 아래처럼 해서 직접 인자를 받아올 수 있게끔 만드는것 ⬇

      await Board.insert({
        //   ...args.createBoardInput  (--> 이거 쓰거나 아래 3줄 쓰거나)
        //spread연산자 사용하면 더 축약할 수 있음
        writer: args.createBoardInput.writer,
        title: args.createBoardInput.title,
        age: args.createBoardInput.age,
      });
      return "createBoard를 요청하셨습니다";
    },

    deleteBoard: async (_: any, args: any) => {
      //이러면 args에 사제요청한 ID가 들어오게 됨
      args.boardID;
      await Board.update({ number: args.number }, { deletedAt: new Date() });
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
  //type 넣고
  resolvers,
  //api 넣고
  cors: true,
  //cors 문제 해결
  //   corse:{
  //       origin: "http/mysite.com"
  //   }
  //--> 이렇게 하면 mysite만 true로 하고 나머지는 다 False
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

    server.listen({ port: "4000" });
    // 서버 접속 완료 하면 --> 4000 번 포트로 24시간 기다리는것 (listen)의 기능
    // 그럼 4000번을 기준으로 다양한 API가 존재하는데 그 중 fetchBoards랑 createBoard를 만든것
  })
  .catch((error) => {
    //연결 실패시 실행
    console.log(error);
  });
