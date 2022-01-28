import * as D from './BoardList.Styles'

export default function BoardListUIPage(props){

return(
    <D.Wrapper>
        <D.ListWrapper>
            <D.InnerWrapper>
                <D.HeadType>Number</D.HeadType>
                <D.DivisionLine/>
                {props.data?.fetchBoards?.map((el, index)=>(
                    <D.Row id={el._id} key={el._id}>
                        <D.MyNumber>{index + 1}</D.MyNumber>
                    </D.Row>
                ))}
            </D.InnerWrapper>
                
            <D.InnerWrapper>
                <D.HeadType>Title</D.HeadType>
                <D.DivisionLine/>
                {props.data?.fetchBoards?.map((el, index)=>(
                    <D.Row id={el._id} key={el._id}>
                        <D.MyTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>{el.title}</D.MyTitle>
                    </D.Row>
                ))}
            </D.InnerWrapper>

            <D.InnerWrapper>
                <D.HeadType>Writer</D.HeadType>
                <D.DivisionLine/>
                {props.data?.fetchBoards?.map((el, index)=>(
                    <D.Row id={el._id} key={el._id}>
                        <D.MyWriter>{el.writer}</D.MyWriter>                    
                    </D.Row>
                ))}
            </D.InnerWrapper>

            <D.InnerWrapper>
                <D.HeadType>Date</D.HeadType>
                <D.DivisionLine/>
                {props.data?.fetchBoards?.map((el, index)=>(
                    <D.Row id={el._id} key={el._id}>
                        <D.MyDate> {el.createdAt.slice(0,10)}</D.MyDate>                 
                    </D.Row>
                ))}
            </D.InnerWrapper>
        </D.ListWrapper>



{/* text */}
        <D.TextList>
            {props.startPage !== 1 && (
            <D.NextPage onClick={props.onClickPrevPage}>
            ＜
            </D.NextPage> 
            )}
            
            
            {new Array(10).fill(1).map(
                (_, index) => 
                props.startPage + index <= props.lastPage &&(
                        <D.Pages  
                        key={index + props.startPage} 
                        onClick={props.onClickPage}
                        id={String(index + props.startPage)}
                        className={index + props.startPage === props.currentPage ? "isNow" : ""}
                        > 
                            {` ${index + props.startPage} `}
                        </D.Pages> 
                )
            )}
        {props.startPage +  10 > props.lastPage || (
            <D.NextPage onClick={props.onClickNextPage}>＞</D.NextPage> )}
            </D.TextList> 




        <D.ListButton onClick={props.onClickMoveToBoardNew}>
            <D.Button>
                게시물 등록하기
            </D.Button>
        </D.ListButton>
    </D.Wrapper>
)
}