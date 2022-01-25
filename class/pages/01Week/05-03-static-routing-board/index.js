import {useRouter} from 'next/router'

export default function StaticRoutingPage(){
    const router = useRouter()
    
    const onClickMove1= (event)=> {
        router.push("/05-04-static-routed-board/1")
    }
    
    const onClickMove2= (event)=> {
        router.push("/05-04-static-routed-board/2")
    }

    const onClickMove3= (event)=> {
        router.push("/05-04-static-routed-board/3")
    }

    return (
        <div>
            {/* <button onClick={onClickMove}>페이지 이동하기</button> */}
            <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
            <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
            <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
        </div>
        )
}