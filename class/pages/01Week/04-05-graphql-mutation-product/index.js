import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'
import { defaultFieldResolver } from 'graphql'


//just a name (doesn't cause any prob even it changes)
const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String!, $createProductInput: CreateProductInput!){
            createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`




export default function GraphqlMutationProduct(){
    const [mySeller, setMySeller] = useState("")
    const [myName , setMyName] = useState("")
    const [myContents, setMyContents] = useState("")
    const [myPrice, setMyPrice] = useState("")

    const [createProduct] = useMutation(CREATE_PRODUCT)

    const OnclickSubmit = async() => {
        await createProduct({  //받아만 오고 따로 상자에 넣는건 아님 // 이렇게도 실행 가능
        variables: {
            seller: "철수",
            createProductInput: {
                name: "마우스",
                detail: "좋은 마우스",
                price: Number(myPrice)
                //1000이라고 해도 문자열 형태로 저장됨 --> should be saved as integer 
            }
        }
        }) 
    }



    const onChangeMySeller = (event) => {
        setMySeller(event.target.value)
    } 
    const onChangeMyName = (event) => {
        setMyName(event.target.value)
    }
    const onChangeMyContents = (event) => {
        setMyContents(event.target.value)
    }
    const onChangeMyPrice = (event) => {
        setMyPrice(event.target.value)
    }


    return(
        <>
        판매자: <input type= "text" onChange={onChangeMySeller} /><br/>
        상품 이름: <input type= "text" onChange={onChangeMyName}/><br/>
        상품내용: <input type= "text" onChange={onChangeMyContents}/><br/>
        가격: <input type= "text" onChange={onChangeMyPrice}/><br/>
        {/* <input type="number"/> 숫자 올라가는 text */}
        <button onClick={OnclickSubmit}>상품 등록하기</button>
        
        </>
        )
}