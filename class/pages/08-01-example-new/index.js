export default function ExampleNewPage(){
    return(
        <div>
            <h1>등록페이지</h1>
            제목: <input type="text"/><br/>
            내용: <input type="text"/><br/>
            <button>등록하기</button>
        </div>
    )
}

//등록 수정 페이지 따로따로 하드코딩 해두면 하나를 수정했을때 계속 복붙해야함
// 그래서 하나로 합쳐서 다른 src폴더에 빼놔야함