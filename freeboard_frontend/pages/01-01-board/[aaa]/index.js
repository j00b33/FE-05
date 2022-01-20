import {useRouter} from 'next/router'
import {useQuery, gql} from '@apollo/client'
import react from 'react'

import {
    Wrapper, MyHeader, HeaderLine, MyWriter, MyDate, 
    DivisionL, MyBody, MyTitle, MainPic, MainVid, MyContents,
    PageBottom, MyBtn
        } from '../../../styles/amotion'

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
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
        variables: { number: Number(router.query.aaa) } 
    });

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
                <MyBtn onclick={true}>수정하기</MyBtn>
                <MyBtn onclick={true}>삭제하기</MyBtn>
            </PageBottom>
        </Wrapper>

    )
}