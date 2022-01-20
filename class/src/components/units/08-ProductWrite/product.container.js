import { useRouter } from 'next/router'
import { useMutation} from '@apollo/client'
import ProductWriteUI from './product.presenter'
import { useState } from 'react'
import {CREATE_PRODUCT, UPDATE_PRODUCT} from './product.queries.js'

export default function ProductWrite(props){
    const router = useRouter()
    
    const [isActive, setIsActive]=useState(false)

    const [mySeller, setMySeller] = useState("")
    const [myName, setMyName] = useState("")
    const [myDetail, setMyDetail] = useState("")
    const [myPrice, setMyPrice] = useState("")

    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [updateProduct] = useMutation(UPDATE_PRODUCT)

    const onClickWrite = async () => {
        const result = await createProduct({ 
            variables: {
                seller: mySeller,
                createProductInput:{
                    name: myName,
                    detail: myDetail,
                    price: myPrice
                }
            } 
        })
        router.push(`/08-Product/${result.data.createProduct.ppp}`)
    }

    const onClickEdit = async() => {
        console.log('수정하기를 클릭하셨군요!')
        const result = await updateProduct({
            variables:{ _id : Number(router.query.ppp), name: myName, detail: myDetail, price: Numeber(myPrice)}
        })
        router.push(`/08-Product/${router.query.ppp}/edit`)
    }



    const onChangeMySeller = (event) => {
        setMySeller(event.target.value)
        if (event.target.value && myName && myDetail && myPrice){
            setIsActive(true)
        }
    }
    const onChangeMyName = (event) => {
        setMyName(event.target.value)     //하나하나 입력할떄마다 저장이 됨 이떄 myWriter는 저장 전임 (초기값인 빈 공백상태)
        if (mySeller && event.target.value && myDetail && myPrice){
            setIsActive(true)
        }
    }
    const onChangeMyDetail = (event) => {
        setMyDetail(event.target.value)
        if (mySeller && myName && event.target.value && myPrice){          //each of them must be in event target value so that all the data are saved at each condition
            setIsActive(true)
        }
    }
    const onChangeMyPrice = (event) => {
        setMyPrice(event.target.value)
        if (mySeller && myName && myDetail && event.target.value){
            setIsActive(true)
        }
    }

    return(
        <ProductWriteUI 
        onClickwrite={onClickWrite}
        onClickEdit={onClickEdit}
        onChangeMySeller = {onChangeMySeller}
        onChangeMyName={onChangeMyName}
        onChangeMyDetail={onChangeMyDetail}
        onChangeMyPrice={onChangeMyPrice}
        isActive={isActive}                
        isEdit={props.isEdit}
        />
    )
}