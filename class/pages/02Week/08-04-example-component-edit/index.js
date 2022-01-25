import Example from '../../../src/components/units/08-example/Example.container.js'

export default function ExampleEditPage(){
    return(
        <Example aaa={true}/> 
    )
}

//등록 수정 페이지 따로따로 하드코딩 해두면 하나를 수정했을때 계속 복붙해야함
// 그래서 하나로 합쳐서 다른 src폴더에 빼놔야함
//08-example

//page

//08-03 페이지도 Example.container에서 import 한다고 전달해줘야함