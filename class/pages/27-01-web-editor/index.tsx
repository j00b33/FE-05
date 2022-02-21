// import ReactQuill from "react-quill"; // --> dynamic import로 변경하기
import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
//ssr: "server-side-rendering 에서는 하지마 브라우저에서만 해"

export default function WebEditorPage() {
  const handleChange = (value: string) => {
    console.log(value);
  };

  //   if (process.browser) {
  //     console.log("나는 브라우저다");
  //   } else {
  //     console.log("나는 프론트앤드 서버다");
  //   }

  return (
    <div>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <ReactQuill onChange={handleChange} />
      {/* 여기에 변동이 생기면 handleChange에 value가 들어오게 되는것 (event같은 느낌인데 얘는 바로 들어오는거) */}
      <br />
      <button>등록하기</button>
    </div>
  );
}
