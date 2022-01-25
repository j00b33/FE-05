import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../../src/components/units/board/10-write/BoardWrite.container";

const FETCH_BOARD = gql`
    query fetchBoard ($number : Int){
        fetchBoard(number : $number){
            writer
            title
            contents
        }
    }
`

export default function BoardsEditPage() {

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        // 1. router.query.mynumber로 해당 게시글 fetchBoard
        variables: {number : Number(router.query.mynumber)}
    })

    return <BoardWrite isEdit={true} data={data}/>
                                //그냥 data는 이름 변경 가능 {data}는 불가능

}

    //BoardEditPage에서는 router.query.mynumber 가능함 그래서 그 해당하는 아이디로 패치보드
    //1. router.query.mynumber 해당 게시글 fetchBoard
    //2. 그 데이터를 프롭스로 넘겨주기
    //3. props.data 하면 해당하는게시글 뽑기 가능함