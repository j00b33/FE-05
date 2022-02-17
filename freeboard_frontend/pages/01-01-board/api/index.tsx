import { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 100px;
`;

const Title = styled.div`
  color: black;
  font-size: 40px;
`;

const Name = styled.div`
  margin-top: 50px;
  font-size: 20px;
`;

const Generate = styled.div`
  font-size: 30px;
`;
export default function OpenApiPage() {
  const [random, setRandom] = useState("");

  useEffect(() => {
    const Nombre = async () => {
      const result = await axios.get(
        "https://random-names-api.herokuapp.com/random"
      );
      setRandom(result.data.body.name); // promise가 뜨게 되는데 이건 비동기형식이라 언젠가 result 화면에 보여줄게 하고 말하는것
      //--> 이렇게 안에 함수를 만들어주고 그 안에 넣어줘야 async 사용 가능
      console.log("Name is Generated!!");
    };
    Nombre();
  }, []); //빈 array는 한번만 실행하고 그 뒤로는 실행 안한다는것

  return (
    <Wrapper>
      <Title>Refresh the page to get a new random name!</Title>
      <Generate> ⬇️ </Generate>
      <Name>{random}</Name>
    </Wrapper>
  );
}
