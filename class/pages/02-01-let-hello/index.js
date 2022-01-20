export default function LetHello(){ 
    //first letter uppercase, export default used to make the program displayed/operated

    // let qqq="반갑습니다"
    // const aaa= "안녕하세요"
    // //another way: put these two variables inside zzz
    //let and const 는 직접 연결해줘야함
    

    function zzz(){
        document.getElementById("qqq").innerText= "반갑습니다"
    }
    return (
        <div>  
            <div id="qqq">안녕하세요</div>
            <button onClick={zzz}>클릭</button> 
            {/* 버튼을 누르는 순간 zzz function operated */}
        </div>
        // return에서는 <div>에하나로 묶여서 나와야함 jsx: 전용 html
    )
}