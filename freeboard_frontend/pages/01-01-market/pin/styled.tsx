import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 120px;

  margin-top: 100px;
  margin-bottom: 100px;
`;

export const Title = styled.div`
  font-size: 40px;
  font-family: "CodaCaption";

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 50px;
`;

export const SinglePin = styled.div`
  border: 3px solid black;
  margin: 30px;
  width: 300px;
  height: 300px;

  box-shadow: 20px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  cursor: pointer;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const PinWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  //한 줄에 3개씩
  flex-wrap: wrap;

  width: 1200px;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 1200px;
  }
`;

export const Text = styled.div`
  font-size: 15px;
  font-weight: 700;
`;
