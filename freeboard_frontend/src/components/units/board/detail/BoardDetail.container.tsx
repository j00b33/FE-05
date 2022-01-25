import BoardDetailUIPage from './BoardDetail.presenter'
import {useRouter} from 'next/router'
import {useQuery, useMutation} from '@apollo/client'
import {FETCH_BOARD, DELETE_BOARD} from './BoardDetail.queries'
import BoardCommentPage from '../comments/BoardComment.container'


export default function BoardDetailPage(){
    const router = useRouter()
    const [deleteBoard] = useMutation(DELETE_BOARD)

    const { data } = useQuery(FETCH_BOARD, { 
        variables: { boardId: String(router.query.boardDetail)}  
    });

    const onClickMovetoList = () => {
        router.push("/01-01-board/list")    
    }

    const onClickMoveToEdit =() => {
        router.push(`/01-01-board/${router.query.boardDetail}/edit`)
    }

    const onClickDelete = async() => {
        await deleteBoard({
            variables: {boardId: String(router.query.boardDetail)}
        })
        alert("게시글이 삭제되었습니다")
        router.push("/01-01-board/list")
    }

    return (
        <>
        <BoardDetailUIPage
        data = {data}
        onClickMoveToEdit = {onClickMoveToEdit}
        onClickMovetoList = {onClickMovetoList}
        onClickDelete = {onClickDelete}
        />
        <BoardCommentPage/>
        </>
    )
}