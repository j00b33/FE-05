import {gql, useQuery, useMutation} from '@apollo/client'
import {
    Wrapper, DivisionLine, Column, Row, 
    HeadType, HeaderLine, HeadRow, 
    MyTitle, MyNumber, MyDate, MyWriter
} from '../../../styles/listEmotion'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            createdAt
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`

export default function MapCheckboxDeletePage (){
    // const [deleteBoard] = useMutation(DELETE_BOARD)
    const {data} = useQuery(FETCH_BOARDS)

    // const onClickDelete = (event) => {
    //     deleteBoard({
    //         variables: {number: Number(event.target.id)},
    //         refetchQueries:[{query: FETCH_BOARDS}]
    //     })
    // }

    return(
        <Wrapper>
            <HeaderLine></HeaderLine>
                <HeadRow>
                    <HeadType>번호</HeadType>
                    <HeadType>제목</HeadType>
                    <HeadType>작성자</HeadType>
                    <HeadType>날짜</HeadType>
                </HeadRow>

                
            {data?.fetchBoards?.map((el)=>(
                <Row key={el.number}>
                    <DivisionLine></DivisionLine>
                    <Column>
                        <MyNumber>{el.number}</MyNumber>
                        <MyTitle>{el.title}</MyTitle>
                        <MyWriter>{el.writer}</MyWriter>
                        <MyDate>{el.createdAt.slice(0,10)}</MyDate>             
                    </Column>
                </Row>
            ))}
        </Wrapper>
    )
}