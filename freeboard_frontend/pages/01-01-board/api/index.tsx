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
  height: 500px;
`;

const Title = styled.div`
  color: black;
  font-size: 30px;
`;

const Arrow = styled.div`
  font-size: 20px;
`;

const Name = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 40px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #d6a0a0;
`;

const Generate = styled.div`
  font-size: 20px;
  cursor: pointer;
  color: black;
  background-color: #ebebeb;
  border-radius: 15px;
  width: 200px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  :hover {
    color: #b85f5f;
  }
  margin-bottom: 10px;
`;

const Back = styled.div`
  cursor: pointer;
  font-size: 15px;
  color: #8b8b8b;
  width: 150px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  :hover {
    color: black;
  }
`;

const Warning = styled.div`
  font-size: 17px;
  color: grey;
  margin-bottom: 10px;
`;

export default function OpenApiPage() {
  const [random, setRandom] = useState("");

  useEffect(() => {
    const Nombre = async () => {
      const result = await axios.get(
        "https://random-names-api.herokuapp.com/random"
      );
      setRandom(result.data.body.name); // promise => async ("Someday the result's gonna be displayed")
      console.log("Name is Generated!!");
    };
    Nombre();
  }, []); //empty array => once it's executed (doesn't activate twice)

  const onClickBack = () => {
    history.back();
    //histroy.go() both back&forth possible
  };

  // const [value, setValue] = useState();

  // const refresh = () => {
  //   // re-renders the component
  //   setValue({});
  // };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <Wrapper>
      <Title>Your random username: </Title>
      {/* <Arrow>⬇</Arrow> */}
      <Name>{random}</Name>
      <Generate onClick={refresh}> Refresh the page </Generate>
      <Back onClick={onClickBack}>Go to previous page</Back>
    </Wrapper>
  );
}
