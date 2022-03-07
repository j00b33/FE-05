import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Header = styled.div`
  font-size: 25px;
  font-family: "CodaCaption";
`;

export const BodyWrapper = styled.div`
  margin-top: 20px;
`;

export const EachRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Alert = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const UserImage = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;

  border: 3px solid black;
`;

export const UserInfo = styled.div`
  margin-left: 10px;
  font-size: 20px;
`;
