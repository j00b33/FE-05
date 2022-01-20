export default function TypescriptPage(){
//typescript 영역 (javascript+)

    //"타입 추론": 타입에 뭐가 들어갔는지 그 후에 나온건 이에 맞는걸로 적혀야 함 = string
    //강제로 넣진 않았지만 이 뒤에 aaa = 숫자를 넣으면 에러가 남
    // let aaa = "안녕하세요"
    // aaa =3 이라고 하면 오류가 남 (string 선언 안해줘도-->타입 추론을 통해)


    //문자타입
    // let bbb:String;      선언
    // bbb = 123 에러남
    // bbb = "반갑습니다" (가능)


    //숫자타입
    // let ccc = 5 (숫자로 타입 추론이 되버림) 강제로 숫자타입이라고 조정하고싶으면 'let ccc:number =5 '하면 됨
    // ccc = "ㅎㅇ" 오류발생함-문자열 넣을 수 없음



    // //boolean type
    // let ddd: boolean 
    // // ddd = 123   --error
    // // ddd = "ㅎㅇ"    --error
    // ddd = true


    //array type
    // let eee = [1,2,3,4,5,6]  --> 배열은 배열인데 number가 들어가있는 배열이라고 추론함 
    //강제로 조정하려면 let eee:number[] = [1,2,3,4,5,6]
    // let fff:String[] = ["a","b","c"] 근데 나이가 들어가면 에러남
    ////// 문자 숫자 같이 들어가려면
    // let ggg = [1,2,3,4,"a","b"] 
    // --> 애초에 그냥 처음부터 문자 숫자 섞어서 넣으면 let ggg: (String | number)[] 이라고 타입추론함
    // 직접 입력: let ggg (String | number)[] = [1,2,3,4,"a","b","c"]


    //전부 문자 or 전부 숫자
    // let hhh = [1,2,3]
    // hhh = ["a"] -->error

    //또는 | 이거 하나 and 는 & 이거 하나

    // let hhh: (String|number)[] = ["a","b","c",1,2,3]
    // //hhh 랑 hHh 다름
    // let hHh: string[] | number[] = [1,2,3,4] //몽땅 string이거나 몽땅 number
    // hHh = ['a','aa','aaa']





    // const Profile = {
    //     name: "철수",
    //     age: 8,
    //     school: "다람쥐초등학교"
    // }

    // -->const Profile: {
    //     name: string;
    //     age: number;
    //     school: string;
    // }    이렇게 추론이 되어버린 상태

    // profile.school=123 불가능
    //처음 들어온 그 상태로 추론을 하기 때문임


    // age: number 혹은 string이였으면 좋겠다면 타입추론을 불가능하게 만들어야함 : 객체타입 지정해야함
    //--> 
    // interface IProfile {
    //     name: string
    //     age: number | string
    //     school: string
    // }
    // const profile:IProfile = {
    //     name: "철수",
    //     age: 8,
    //     school: "다람쥐초등학교"
    // }


    // profile.school=123 -->여전히 불가능
    // profile.age="8살" --> rksmdgka



    
    return(
        <div>타입스크립트 연습</div>
        ) 
}