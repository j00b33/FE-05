import * as P from './product.styles'

export default function ProductWriterUI(props){
    return(
        <div>
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
            Name: <P.MyInput type="text" onChange={props.ddd}/><br/>
            Detail: <P.MyInput type="text" onChange={props.eee}/><br/>
            Price: <P.MyInput type="text"onChange={props.fff}/><br/>
            <P.MyButton onClick={props.isEdit ? props.onClickEdit : props.onClickWrite} 
                isActive={props.isActive}
                >
                {props.edit ? "수정" : "등록"}하기</P.MyButton>
        </div>
    )
}