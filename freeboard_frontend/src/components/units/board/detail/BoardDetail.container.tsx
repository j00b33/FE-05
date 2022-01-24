import BoardDetailUIPage from './BoardDetail.presenter'
import {useRouter} from 'next/router'
import {useQuery, useMutation} from '@apollo/client'
import {FETCH_BOARD, DELETE_BOARD} from './BoardDetail.queries'



export default function BoardDetailPage(){
    const router = useRouter()

    const [deleteBoard] = useMutation(DELETE_BOARD)

    const { data } = useQuery(FETCH_BOARD, { 
        variables: { boarderId: String(router.query.aaa)}  
    });

    const onClickMovetoList = () => {
        router.push(`/01-01-board/${router.query.List}`)
    }

    const onClickMoveToEdit =() => {
        router.push(`/01-01-board/${router.query.aaa}/edit`)
    }

    const onClickDelete = async() => {
        await deleteBoard({
            variables: {boardId: String(router.query.aaa)}
        })
        alert("게시글이 삭제되었습니다")
        router.push(`/01-01-board`)
    }

    return (
        <BoardDetailUIPage
        data = {data}
        onClickMoveToEdit = {onClickMoveToEdit}
        onClickMovetoList = {onClickMovetoList}
        onClickDelete = {onClickDelete}
        />
    )
}