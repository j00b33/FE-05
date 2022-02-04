import {createConnection} from 'typeorm'

console.log("hello typescript")

//데이터베이스에 연결해주는 코드를 써줘야함
createConnection({
    type:"postgres",
    database: "postgres",
    username: "postgres",
    password: "postgres2021",
    port: 5021, //내 개인 포트번호
    host: "34.64.187.209",
    entities: ["./*.postgres.ts"],
    logging: true,
    synchronize: true
})
    .then(() => {
    //연결 성공시 실행
    console.log("접속완료")
})
    .catch((error) => {
        console.log(error)
    })