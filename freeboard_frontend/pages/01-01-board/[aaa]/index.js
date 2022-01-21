import {useRouter} from 'next/router'
import {useQuery, gql} from '@apollo/client'
import react from 'react'

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
        _id
        writer
        title
        contents
        createdAt
    }
  }
`; 

export default function FreeBoardRouted(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, { 
        variables: { boarderId: router.query.aaa} 
    });

    const onclickMoveToEdit =() => {
        router.push('01-01-board/${router.query.aaa}/edit')
    }

    return (
        <Wrapper>
            <MyHeader>
                    <HeaderLine>
                    <MyWriter>{data?.fetchBoard?.writer}</MyWriter>
                    <MyDate>{data?.fetchBoard?.createdAt}</MyDate>
                </HeaderLine>

            </MyHeader>                
            <DivisionL/>
            <MyBody>
                <MyTitle>{data?.fetchBoard?.title}</MyTitle>
                <MainPic src='/images/boardpic/mainpic.png'/>
                <MyContents>{data?.fetchBoard?.contents}</MyContents>
                <MainVid src='/images/boardpic/secondpic.png'/>
                
            </MyBody>
            <PageBottom>
                <MyBtn onclick={true}>목록으로</MyBtn>
                <MyBtn onclick={onclickMoveToEdit}>수정하기</MyBtn>
                <MyBtn onclick={true}>삭제하기</MyBtn>
            </PageBottom>
        </Wrapper>

    )
}