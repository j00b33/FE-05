import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const NextPage = styled.button`
  background-color: white;
  font-weight: 7000;

  cursor: pointer;
  :hover {
    background-color: #00eeff;
  }
`;

export const Pages = styled.span`
  font-size: 20px;
  font-family: "CodaCaption";
  cursor: pointer;
  color: #4e4e4e;

  :hover {
    text-decoration-line: underline;
    color: #a7a7a7;
  }

  &.isNow {
    color: #00eeff;
  }
`;

export const TextList = styled.span`
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-top: 20px;
`;

export const ListButton = styled.div`
  padding-top: 30px;
`;

export const Button = styled.button`
  width: 171px;
  height: 52px;

  font-family: "CodaCaption";
  font-size: 17px;

  background-color: white;
  border: 2px solid #262626;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  cursor: pointer;
  :hover {
    background-color: #9900ff;
    color: white;
  }
`;
