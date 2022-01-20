import * as D from './dynamicPage.styles'

export default function DynamicPageUI(props){
return (
    <div>
        <D.MyButton onClick={props.onClickMove1}>1번 게시글로 이동하기</D.MyButton>
        <D.MyButton onClick={props.onClickMove2}>2번 게시글로 이동하기</D.MyButton>
        <D.MyButton onClick={props.onClickMove3}>3번 게시글로 이동하기</D.MyButton>
        <D.MyButton onClick={props.onClickMove4}>4번 게시글로 이동하기</D.MyButton>
    </div>
    )
}