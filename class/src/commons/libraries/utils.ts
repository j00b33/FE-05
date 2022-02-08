export const checkFileValidation = (file?: File) => {
  if (!file?.size) {
    alert("파일이 없습니다");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    //bite * KB * MB
    //컴퓨터가 0과 1 구성인데 0은 꺼짐 1은 켜짐 그래서 boolean 형태인데
    //이 두개를 가지고서 조건을 만들다보니 조건이 겹치면 제곱제곱을 하게 되는데 그러면 1000에서 안끝나고 1024에서 끝남
    alert("파일 용량이 너무 큽니다. (제한: 5MB)");
    return false;
  }

  if (file.type.includes("jpeg") && file.type.includes("png")) {
    alert("Only jpeg or png files are allowed to upload");
    return false;
  }
  //걸러걸러서 여기까지 오면 이제 파일 타입을 비교

  return true;
};
