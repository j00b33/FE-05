import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'

const FETCH_PRODUCT =gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            _id
            name
            detail
            price
        }
    }
`

export default function ProductDetailPage(){
    const router = useRouter()

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {productId: router.query.ppp}
    })

    const onClickMoveToEdit = () =>{
        router.push(`/08-Product/${router.query.ppp}/edit`)
    }

    return (
        <>
            <div>{router.query.ppp} 상품 등록 완료</div>
            <div>Name: {data?.fetchProduct?.name}</div>
            <div>Detail: {data?.fetchProduct?.detail}</div>
            <div>Price: {data?.fetchProduct?.price}</div>
            <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
        </>
    )
}