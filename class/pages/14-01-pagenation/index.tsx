import {gql, useQuery} from '@apollo/client'

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int){
        fetchBoards (page: $page){
            _id
            writer
            title
        }
    }
`

export default function PageNationPage(){

    const {data, refetch} = useQuery(FETCH_BOARDS,{
        //refetch라는 기능 자체도 받아올 수 있음
        variables: {page : 1}
    })

    const onClickPage = (event) =>{
        refetch({ page: Number(event.target.id)})
        //내가 클릭한 해당 페이지를 refetch ({이 괄호 안 자체가 variables 입력 공간})
        //refetch 하면 최종적으로 {data}가 바뀜
    }

    return(
        <div>
            <h1>Page Nation Practice</h1>
            {data?.fetchBoards?.map((el) =>(  
                <div key={el._id}>{el.title} {el.writer}</div>
            ))}

            {[1,2,3,4,5,6,7,8,9,10].map((el)=> (
                <span  key={el} onClick={onClickPage} id={String(el)}> 
                {` ${el} `}
                </span>
            ))}
            
        
            {/* <span onClick={onClickPage} id="1"> 1 </span>
            <span onClick={onClickPage} id="2"> 2 </span>
            <span onClick={onClickPage} id="3"> 3 </span> */}
           
        </div>

    )

}

                        //id에 들어가는 숫자가 fetchBoards의 아이디 그 특정 리스트를 받아오는 10개 페이지 아이디
