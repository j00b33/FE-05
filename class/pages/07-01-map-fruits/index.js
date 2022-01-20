const FRUITS = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
];

export default function MapFruitsPage(){
    
    // const aaa = [<div>1 레드향</div>, <div>2 샤인머스켓</div>, <div>3 산청딸기</div>]
    
    // const bbb = ["나의레드향", "나의샤인머스켓","나의산청딸기"].map((el) => (<div>{el}</div>))

    const ccc = FRUITS.map((el)=>(<div>{el.number} {el.title}</div>))
                                    //html 문자열로 됨 js로 바꾸려면 중괄호 안으로 감싸줘야함 
    return(
        <div>{ccc}</div>
        //<div>FRUITS.map((el)=>(<div>{el.number} {el.title}</div>))</div>
        // --> 직접 기입하는게 가독성 오름
    )

}







// const classmates = [
//     {name: "Debbie", age: 19},
//     {name: "Dereck", age: 17},
//     {name: "Dmitri", age: 23}
// ]

// classmates.fileter((el)=>(el.age>=18))