import {useRouter} from 'next/router'
import DynamicPageUI from './dynamicPage.Presenter'

export default function DynamicPage(){
    const router = useRouter()
    
    const onClickMove1= ()=> {
        router.push("/05-06-dynamic-routed-board/1")
    }
    
    const onClickMove2= ()=> {
        router.push("/05-06-dynamic-routed-board/2")
    }

    const onClickMove3= ()=> {
        router.push("/05-06-dynamic-routed-board/3")
    }

    const onClickMove4= ()=> {
        router.push("/05-06-dynamic-routed-board/4")
    }

    const onClickMove100= ()=> {
        router.push("/05-06-dynamic-routed-board/100")
    }

    return(
        <DynamicPageUI
            onClickMove1={onClickMove1}
            onClickMove2={onClickMove2}
            onClickMove3={onClickMove3}
            onClickMove4={onClickMove4}
            onClickMove100={onClickMove100}
        />
    )
}