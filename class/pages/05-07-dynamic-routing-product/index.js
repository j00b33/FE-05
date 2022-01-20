import axios from 'axios'
import {useState} from 'react'
import {gql, useMutation} from '@apollo/client'
import {useRouter} from 'next/router'

const CREATE_PRODUCT = gql`
    mutation fetchProduct($seller: String!, $createProductInput: CreateProductInput!){
            fetchProduct(seller: $seller, createProductInput: $createProductInput){
            seller
            name
            detail
            price
        }
    }
`

export default function DynamicRoutingProduct(){
    const router = useRouter()
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const [mySeller, setMySeller] = useState("")
    const [myName , setMyName] = useState("")
    const [myContents, setMyContents] = useState("")
    const [myPrice, setMyPrice] = useState("")

    const OnclickSubmit = async() => {
        // try {
        const result = await createProduct({  
        variables: {
            seller: mySeller,
            fetchProductInput: {
                name: myName,
                detail: myContents,
                price: Number(myPrice)
            }
        }
        }) 
        console.log(result.data.createProduct.id) //84c4ea23-037c-4049-9315-6525a820437f
        router.push(`/05-08-dynamic-routed-product/ ${result.data?.createProduct._id}`)
    }

                            //해당하는 위치                     //해당하는 변수/상수
    
    // }catch(error){
    //     console.log(error.message)
    //     //-->backend자체적으로 만들어진 message들이 오류가 났을때 날라옴
    //     //실행이 안되면 무시하고 catch로 떨어짐
    // } //finally {} //무조건 한번은 마지막에 실행해야될떄 사용
    

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
        <input type="number"/> 
        <button onClick={OnclickSubmit}>상품 등록하기</button>
        
        </>
        )
    
}