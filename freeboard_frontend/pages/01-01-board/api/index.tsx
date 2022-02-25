import { useEffect, useRef, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
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
  font-weight: 700;
`;

const Name = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 40px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #dac6e7;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 400px;
`;

const Generate = styled.div`
  font-size: 20px;
  cursor: pointer;
  color: black;

  :hover {
    color: #09ff00;
  }
  margin-bottom: 10px;
`;

const Back = styled.div`
  font-size: 20px;
  cursor: pointer;
  color: black;

  :hover {
    color: #09ff00;
  }
  margin-bottom: 10px;
`;

export default function OpenApiPage() {
  const [randomName, setRandomName] = useState("");

  useEffect(() => {
    const Nombre = async () => {
      const result = await axios.get(
        "https://random-names-api.herokuapp.com/random"
      );
      setRandomName(String(result.data.body.name)); // promise => async ("Someday the result's gonna be displayed")
      console.log("Name is Generated!!");
    };
    Nombre();
  }, []); //empty array => once it's executed (doesn't activate twice)

  const onClickBack = () => {
    history.back();
    //history.go() both back&forth possible
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <Wrapper>
      <Title>Your random username: </Title>
      {/* <Arrow>⬇</Arrow> */}
      <Name>{randomName}</Name>
      {/* <button onClick={copyText}>Copy</button> */}
      <Menu>
        <Back onClick={onClickBack}>Go to previous page</Back>
        <div>{" / "}</div>
        <Generate onClick={refresh}>Refresh the page</Generate>
      </Menu>
    </Wrapper>
  );
}
