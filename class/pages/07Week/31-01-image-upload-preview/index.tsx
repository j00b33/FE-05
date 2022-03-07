import { ChangeEvent, useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    if (!file) {
      alert("파일이 없습니다!");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); //데이터를 읽어서 URL로 변경하는 작업 (괄호 안에는 어떤결 변강힐지)
    //()하면 blob이 뜨는데 이건 사이즈가 큰 데이터를 의미함 (이미지 / 영상 등등)
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result); //콘솔에 찍히는 이 주소는 그 엄청 긴 가짜 주소
        setImageUrl(data.target?.result); //string이 아닐 수도 있ek 없으면 어쩔거냐
        // --> 그래서 없으면 string으로 해줘 하는거
      }
    };
  };

  return (
    <div>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />
    </div>
  );
}
