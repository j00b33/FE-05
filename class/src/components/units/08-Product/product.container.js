import { useRouter } from 'next/router'
import { useMutation} from '@apollo/client'
import ProductUI from './product.presenter'
import { useState } from 'react'
import {CREATE_PRODUCT, UPDATE_PRODUCT} from './product.queries.js'

export default function ProductWrite(props){
    const router = useRouter()
    
    const [isActive, setIsActive]=useState(false)

    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [updateProduct] = useMutation(UPDATE_PRODUCT)

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

    const onClickWrite = async () => {
        const result = await createProduct({ 
            variables: { seller : seller,createProductInput:{name,detail,price}} 
        })

        router.push(`/08-Product/${result.data.id.edit}`)
    }

    const onClickEdit = async() => {
        console.log('수정하기를 클릭하셨군요!')
        const result = await updateProduct({
            variables:{ _id : Number(router.query.id), name: name, detail: detail, price: Numeber(price)}
        })
        router.push(`/08-Product/${router.query.id}`)
    }






    const onChangeMyName = (event) => {
        setName(event.target.value)     //하나하나 입력할떄마다 저장이 됨 이떄 myWriter는 저장 전임 (초기값인 빈 공백상태)
        if (event.target.value && detail && price){
            setIsActive(true)
        }
    }
    const onChangeMyDetail = (event) => {
        setDetail(event.target.value)
        if (name && event.target.value && price){          //each of them must be in event target value so that all the data are saved at each condition
            setIsActive(true)
        }
    }
    const onChangeMyPrice = (event) => {
        setPrice(event.target.value)
        if (name && detail && event.target.value){
            setIsActive(true)
        }
    }

    return(
        <ProductUI 
            onClickwrite={onClickWrite}
            onClickEdit={onClickEdit}
            ddd={onChangeMyName}
            eee={onChangeMyDetail}
            fff={onChangeMyPrice}
            isActive={isActive}                
            isEdit={props.isEdit}
        />
    )
}