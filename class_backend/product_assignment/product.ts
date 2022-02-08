import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import { Product } from "./product.postgres";

const typeDefs = gql`
  type Product {
    number: Int
    id: String
    seller: String
    name: String
    detail: String
    price: Int
  }

  type fetchProduct {
    id: String
    seller: String
    name: String
    detail: String
    price: Int
  }

  type fetchProducts {
    id: String
    seller: String
    name: String
    detail: String
    price: Int
  }

  input CreateProductInput {
    id: String!
    number: Int!
    message: String!
  }

  input UpdateProductInput {
    id: String
    number: Int
    message: String
  }

  type Query {
    fetchProduct: [Product]
    fetchProducts: [Product]
  }

  type Mutation {
    createProduct(createProductInput: CreateProductInput): String
    updateProduct(updateProductInput: UpdateProductInput): String
    deleteProduct(productId: ID): ID
  }
`;

const resolvers = {
  Query: {
    fetchProduct: async () => {
      const mine = await Product.find({
        where: { deletedAt: null },
      });
      return mine;
    },

    fetchProducts: async () => {
      //DB와 연결 (꺼내서 오기)
      const result = await Product.find({
        where: { deletedAt: null },
      });
      console.log(result);
      return result;
      //string이랑 result랑 다름. 얜 이제부터 Board type이 되어야함
    },
  },

  Mutation: {
    createProduct: async (_: any, args: any) => {
      await Product.insert({
        seller: args.createProductInput.seller,
        name: args.createProductInput.name,
        detail: args.createProductInput.detail,
        price: args.createProductInput.price,
      });
      return "createProduct를 요청하셨습니다";
    },

    updateProduct: async (_: any, args: any) => {
      await Product.insert({
        id: args.createProductInput.id,
        name: args.createProductInput.name,
        detail: args.createProductInput.detail,
        price: args.createProductInput.price,
      });
    },

    deleteProduct: async (_: any, args: any) => {
      //이러면 args에 삭제요청한 ID가 들어오게 됨
      args.productId;
      await Product.update({ number: args.number }, { deletedAt: new Date() });
      //{조건}, {바꿀 내용}

      return "삭제가 완료되었습니다";
      // --> soft delete
    },
  },
};

const productServer = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

//data base연결 코드
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

    productServer.listen({ port: "4000" });
  })
  .catch((error) => {
    //연결 실패시 실행
    console.log(error);
  });
