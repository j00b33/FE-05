import {useRouter} from 'next/router'
import {useQuery} from '@apollo/client'

const FETCH_PRODUCT = gql`
query fetchProduct($productId: ID){
    fetchProduct(productId: $productId) {
        seller
        name
        detail
        price
    }
}
`

export default function DynamicRoutedPage(){
    const router = useRouter()
    const {data} = useQuery(FETCH_PRODUCT, {
        variable: {productId: router.query.mynumber}
    })

    // console.log(router.query.qqq)

    return (
        <div>
        <div>상품명: {data?.fetchProduct?.name}</div>
        <div>상품 가격: {data?.fetchProduct?.price}</div>
        </div>
    )
}