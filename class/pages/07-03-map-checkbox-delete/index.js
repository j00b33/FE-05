import {gql, useQuery, useMutation} from '@apollo/client'
import styled from '@emotion/styled'

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

const Row = styled.div`
    display: flex;
`
const Column = styled.div`
    width: 20%;
`

export default function MapCheckboxDeletePage (){
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const {data} = useQuery(FETCH_BOARDS)

    const onClickDelete = (event) => {
        deleteBoard({
            variables: {number: Number(event.target.id)},
            refetchQueries:[{query: FETCH_BOARDS}]

        })
        //event.target.id --> 작성된 아이디 가져올 수 있음. 이 아이디로 삭제요청
    }

    return(
        <div>
            {data?.fetchBoards?.map((el)=>(
                <Row key={el.number}>
                    <Column><input type="checkbox"/></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.createdAt}</Column>
                    <Column><button id={el.number} onClick={onClickDelete}>삭제</button></Column>
                                                        {/* event handler */}
                </Row>
            ))}
        </div>
    )
}

// database excel 부분에는 삭제가 되지만 화면에는 삭제가 안됨. 그래서 새로고침 해줘야함
//fetch 해주고 다시 가져오는걸 refetch 라고 함

//체크하고 삭제했는데 삭제는 되지만 체크표시는 안없어짐
//--> key 제공 : 데이터를 따로따로 저장해주는 요소 (고유한 값을 가지고 있어야함)
// --> writer, title,createdAt는 고유하지 않음 number만 고유한 값임
// --> ket에는 index를 넣을 수 없음. key={0} 이라고 하면 첫번째 줄 목록. 
// 만약 키가 1번인걸 삭제한다고 하면 삭제가 안됨. key는 계속 남아있게 되기 때문
                // --> 삭제는 되지만 키가 안사라짐 오류걸리게 됨
