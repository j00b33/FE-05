import Example from '../../src/components/units/08-example/Example.container'
export default function ExampleNewPage(){
    return(
        <Example aaa={false}/>  
        //어차피 아니면 등록이니까 aaa 없어도 되지만 있어도 상관없음  
        // --> 그냥 <Example/> 가능 if 수정페이지에 aaa={true} 되어있응ㄹ떄
    )
}

//등록 수정 페이지 따로따로 하드코딩 해두면 하나를 수정했을때 계속 복붙해야함
// 그래서 하나로 합쳐서 다른 src폴더에 빼놔야함
//08-example

//page