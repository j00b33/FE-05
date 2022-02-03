//14-01-복사
import {gql, useQuery} from '@apollo/client'
import { useState } from 'react'

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

    const {data} = useQuery(FETCH_BOARDS,{ variables: {page : 1} })

    const [isEdits, setIsEdits] = useState([false,false, false,false,false,false,false,false,false,false])

    const onClickisEdit = (event) => {
        console.log(event.target.id)
        const aaa = isEdits
        aaa[event.target.id] = true

        console.log(aaa)

        setIsEdits([...aaa])
        // setIsEdit(true)
    }

    return(
        <div>
            <h1>댓글 수정 연습</h1>
            {data?.fetchBoards?.map((el, index) =>(  
                <div key={el.id}>
                    {isEdits[index] ===false &&(
                        <div>
                            <span>{el.title} {el.writer}</span>
                            <button id={index} onClick={onClickisEdit}>수정하기</button>
                        </div>
                )}

                {isEdits[index] ===true &&(
                    <div>
                        <div>=======================</div>
                        <div>이것은 수정하기 화면입니다.</div>
                        <div>=======================</div>
                    </div>
            )}
            </div>
            ))}
        </div>
    )
}