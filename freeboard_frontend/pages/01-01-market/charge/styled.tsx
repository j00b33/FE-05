import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 100px;
  /* width: 900px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 400px;
`;

export const Header = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 500px;
`;

export const SelectAmount = styled.button`
  width: 100px;
  height: 40px;
  font-size: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  background-color: white;
  cursor: pointer;

  :hover {
    color: #9900ff;
    border: 1px solid #9900ff;
  }
`;

export const Selected = styled.div`
  font-size: 20px;
`;

export const ChargeButton = styled.div`
  font-size: 20px;
  font-weight: 700;

  width: 400px;
  height: 40px;

  border: 2px solid grey;
  background-color: #befbff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
