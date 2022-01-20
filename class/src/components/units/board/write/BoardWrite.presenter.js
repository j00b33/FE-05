import * as S from './BoardWrite.styles'
//낱개로 되어있는건 내가 받고싶은거만 골라서 받기 {중괄호 안에 담아서}
//만약 다 써야하고 모두 받아오려면 
// import * as S from './BoardWrite.styles'
// --> 모두 가지고 와서 S 이름에다가 변수로 저장 
// --> 그러면 S.MyInput 이런 식으로 사용하면 됨!


export default function BoardWriteUI(props){
    //어차피 default이기 떄문에 container에 BoardWriteUI에는 어떤 이름이 들어가도 상관없음 


    return (
        <>                                 
            작성자: <S.MyInput type="text" onChange={props.ddd} /><br />
            제목: <S.MyInput type="text" onChange={props.eee}/><br />
            내용: <S.MyInput type="text" onChange={props.fff}/><br />
            <S.MyButton onClick={props.ccc} ggg={props.isActive}>GRAPHQL-API 요청하기</S.MyButton>
            <div>{props.bbb}</div>
        </>
    )
}
//MyButton MyInput --> emotion component





// export const a =3;
//그냥 중괄호로 골라올 수 있음
// container import 창에: import AAAABBBB , {a} from ''

//a as AAA 로 변수 변경 저장도 가능
