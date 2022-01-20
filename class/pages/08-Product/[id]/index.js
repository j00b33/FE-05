import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'

const FETCH_PRODUCT =gql`
    query fetchProdecut($productId: ID){
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

    const { data } = useMutation(FETCH_PRODUCT, {
        variables: {productID: Number(router.query.id)}
    })

    const onClickMoveToEdit = () =>{
        router.push(`/08-Product/${router.query.id}/edit`)
    }

    return (
        <>
            <div>{router.query.id}번 상품 등록 완료</div>
            <div>Product: {data?.fetchProduct?.name}</div>
            <div>Detail: {data?.fetchProduct?.detail}</div>
            <div>Price: {data?.fetchProduct?.price}</div>
            <button onClickMoveToEdit={onClickMoveToEdit}>수정하러 이동하기</button>
        </>
    )
}