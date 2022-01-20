import BoardWrite from "../../../../src/components/units/board/09-write/BoardWrite.container";
//BoardWrite는 08-05-write에 있는 container function 이름 //container랑 이어주는거

export default function BoardsEditPage() {
    return <BoardWrite isEdit={true} />
}

//수정페이지