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
        variables: {page : 1}
    })

    const onClickPage = (event) =>{
        refetch({ page: Number(event.target.id)})
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
            
            {/* 
            //이렇게 따로따로 다 해줘도 되긴 하지만 더 간략하게 하기 위해서 윗방법 사용
            <span onClick={onClickPage} id="1"> 1 </span>
            <span onClick={onClickPage} id="2"> 2 </span>
            <span onClick={onClickPage} id="3"> 3 </span>
            */}
        </div>

    )

}