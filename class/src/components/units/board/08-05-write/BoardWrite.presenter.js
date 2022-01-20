//presenter page자체가 UI를 그려주는 페이지라서 이 템플릿을 new 랑 edit페이지가 함께 쓰는것 그래서 true일떄 이거 주고 false일땐 저거 줘 이런식으로 명령어가 들어가있음!
import * as S from './BoardWrite.styles'
//낱개로 되어있는건 내가 받고싶은거만 골라서 받기 {중괄호 안에 담아서}

export default function BoardWriteUI(props){


    return (
        <> 
            <h1>{props.isEdit ? "수정하기" : "등록하기"}</h1>
            작성자: <S.MyInput type="text" onChange={props.ddd} /><br />
            제목: <S.MyInput type="text" onChange={props.eee} /><br />
            내용: <S.MyInput type="text" onChange={props.fff} /><br />
            <S.MyButton 
                onClick={props.isEdit ? props.xxx : props.ccc}
                ggg={props.isActive}
            >
                {props.isEdit ? "수정하기" : "등록하기"}
            </S.MyButton>

                {/* {props.isEdit ? (
                <S.MyButton onClick={props.xxx} ggg={props.isActive}>수정하기</S.MyButton>
            ) : (
                <S.MyButton onClick={props.ccc} ggg={props.isActive}>등록하기</S.MyButton>
            )}

            {props.isEdit && <S.MyButton onClick={props.xxx} ggg={props.isActive}>수정하기</S.MyButton>}
            {!props.isEdit && <S.MyButton onClick={props.ccc} ggg={props.isActive}>등록하기</S.MyButton>} */}
            <div>{props.bbb}</div>
            
        </>
    )
}
//MyButton MyInput --> emotion component
//게시글이 성공적으로 등록됐다고 화면에 display해주는 setAaa 통해서 {aaa} =bbb