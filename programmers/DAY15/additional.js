b=[1,2,3]
Array.isArray (b)
//배열이 맞냐 아니냐를 따지는것


a = new Set([1,2,3,2])
typeof a
//배열 형태를 가지는 객체 데이터
//고유한 값만 저장 (중복데이터가 들어오지 않음)
//고유한 데이터만 저장
a.add(4)
a.delete(2)
//data가 존재하니까 삭제가 완료됐다고 해서 true가 뜨는거임

//data 조회
a.has(4)
//4가 있냐 없냐 해서 true를 리턴함

//길이 조회
//a.length 로 하면 길이 조회 안됨
a.size


b= Array.from(a)
b
//[1,3,4]

//data reset
a.clear()
a
//new set 사용하게 되면 좀 더 편하게 사용 가능함
//효율성과 시간적인 요소 good
//많은 데이터를 검증할떄 new set사용해서 includes 보다 빠름


