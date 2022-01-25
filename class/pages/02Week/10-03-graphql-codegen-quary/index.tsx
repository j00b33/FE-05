import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'
import { IQuery, IQueryFetchBoardsArgs } from '../../src/commons/types/generated/types'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
        }
    }
`

export default function BoardsDetailPage(){
    const router = useRouter()

    const { data } = useQuery<Pick<IQuery, "fetchBoard">,IQueryFetchBoardsArgs>(FETCH_BOARD, {
        variables: { number: Number(router.query.mynumber) }
    })
    data?.fetchBoard?.contents

    const onClickMoveToEdit = () => {
        router.push(`/09-01-boards/${router.query.mynumber}/edit`)
    }
    // 이부분에서 08-05 보드로 보내고있어서 값 못가져오는거같이 보였어요
    return (
        <div>
            <div>{router.query.mynumber}번 게시글 페이지 이동 완료!!!</div>
            <div>작성자: {data?.fetchBoard?.writer}</div>
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data?.fetchBoard?.contents}</div>
            <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
        </div>
    )

}
//상세페이지 

//초기 오류
//여기선 작성자가 바뀜
//기존값이 입력이 되어있지 않음
//제목만 수정하면 작성자랑 내용을 빈 문자열로 받아서 빈칸으로 수정이 저장됨