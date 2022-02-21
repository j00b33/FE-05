//1. 문자
export function getString(args: string): string {
  return args; //--> return type이 string
}
const result1 = getString("철수");
console.log(result1);

//
//
//
//2. 숫자
export function getNumber(args: number): number {
  return args; //--> return type이 number
}
const result2 = getNumber(123);
console.log(result2);

//

//any는 들어오는게 뭔지 모름
// 근데 얜 들어온 숫자로 추론을해서 뱉어ㅈ냄
//
//
//3. generic type (들어온 타입을 그대로 서용)
export function getAny(arg: any): any {
  return arg;
}
const myResult31 = getAny("철수");
const myResult32 = getAny(123);
const myResult33 = getAny(true);

console.log(myResult31);
console.log(myResult32);
console.log(myResult33);

export function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}

const aaa: string = "철수"; //--> string으로 들어와서 String으로 나간다
const bbb: number = 8;
const ccc: boolean = true;

const result41 = getGeneric(aaa);
const result41 = getGeneric(bbb);
const result41 = getGeneric(ccc);
//--> 정의가 각각 되어버림

//그냥 check
console.log(result41);
console.log(result41);
console.log(result41);

//
//
//
//5. any 응용
//prettier-ignore
export const getAnyReverse = (arg1: any, arg2: any, arg3: any): [any, any, any] {
  return [arg3, arg2, arg1]
};

const results = getAnyReverse("철수","다람쥐초등학교",8)
console.log(results)

//6. generic 응용
//prettier-ignore
export function getGenericReverse<MyType>(arg1:MyTipe1, arg2: MyType2, arg4: MyType3): [MyType3, MyType2, MyType1]{
    return [arg3, arg2, arg1]
}

const result6 = getGenericReverse("철수", "다람쥐초등학교", 8)
console.log(result6)

//any는 뭔지 아무것도 모르고
//unknown 으로 들어가면 string으로 나오는구나, number로 나오는구나
//generic은 모르기떄문에 우리만의 type을 미리 만들어주는거임

//
//
//7. generic 응용 [축약버전 111]
//prettier-ignore
export function getGenericReverseT<T1, T2, t3>(arg1:T1, arg2: T2, arg3: t3): [T1, T2, T3]{
    return [arg3, arg2, arg1]
}

const result7 = getGenericReverse("철수", "다람쥐초등학교", 8)
console.log(result7)

//any는 뭔지 아무것도 모르고
//unknown 으로 들어가면 string으로 나오는구나, number로 나오는구나
//generic은 모르기떄문에 우리만의 type을 미리 만들어주는거임

//
//
//8. generic 응용 [축약버전222 ]
//prettier-ignore
export function getGenericReverseTUV<T, U, V>(arg1:T, arg2: U, arg3: V): [T, U, V]{
    return [arg3, arg2, arg1]
}
const result8 = getGenericReverse("철수", "다람쥐초등학교", 8)
// const result8 = getGenericReverse<string, string, number>("철수", "다람쥐초등학교", 8)
console.log(result8)

//any는 뭔지 아무것도 모르고
//unknown 으로 들어가면 string으로 나오는구나, number로 나오는구나
//generic은 모르기떄문에 우리만의 type을 미리 만들어주는거임