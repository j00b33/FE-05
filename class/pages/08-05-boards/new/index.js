import BoardWrite from "../../../src/components/units/board/08-05-write/BoardWrite.container";
//BoardWrite는 08-05-write에 있는 container function 이름 //container랑 이어주는거
export default function BoardsNewPage(){

    return(
        <BoardWrite isEdit={false}/>
        //그래서 이 BoardWrite에 isEdit이 선언되어있는데 그걸 presenter까지 끌고 가서 

    )

}

//등록페이지