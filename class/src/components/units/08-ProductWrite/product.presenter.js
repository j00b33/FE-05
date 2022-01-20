import * as P from './product.styles'

export default function ProductWriteUI(props){
    return(
        <div>
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
            Seller: <P.Input type="text" onChange={props.onChangeMySeller}/><br/>
            Name: <P.MyInput type="text" onChange={props.onChangeMyName}/><br/>
            Detail: <P.MyInput type="text" onChange={props.onChangeMyDetail}/><br/>
            Price: <P.MyInput type="text"onChange={props.onChangeMyPrice}/><br/>
            <P.MyButton onClick={props.isEdit ? props.onClickEdit : props.onClickWrite} 
                isActive={props.isActive}
                >
                {props.isEdit ? "수정하기" : "등록하기"}</P.MyButton>
        </div>
    )
}