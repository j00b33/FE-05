import {useState} from 'react'
import { gql, useMutation } from '@apollo/client'

const CREATE_BOARD = gql`
    
`

export default function BoardWrite(){

    const [inputs, setInputs] = useState({ writer: "", title: "", contents: "" })

    const [qqq] = useMutation(CREATE_BOARD)

    const zzz = async () => {
        const result = await qqq({ 
            variables: { 
                ...inputs} 
        })
    }

    const onChangeInputs= (event) => {
        setInputs({
            ...inputs,
            [event.target.id]: event.target.value
            //event.target.id ==> key로 들어감
        })
    }

    return (
        <div>
            <div>스프레드 연산자 연습</div>
            <input type="text" id="writer" onChange={onChangeInputs}/>
            <input type="text" id="title" onChange={onChangeInputs}/>
            <input type="text" id="contents" onChange={onChangeInputs}/>
        </div>
    )
}