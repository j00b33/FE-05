import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container";

export default function BoardsNewPage(){

    return(
        <BoardWrite isEdit={false}/>

    )

}

//등록페이지에서는 미리보기가 없기때문에 따로 fetchBoard 필요없음